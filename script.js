// Initialize date for declaration
document.addEventListener('DOMContentLoaded', function() {
    updateDeclarationDate();
    loadSavedData();
    attachEventListeners();
    updateResumePreview();
});

// Update declaration date
function updateDeclarationDate() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-IN', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
    document.getElementById('previewDeclarationDate').textContent = dateStr;
}

// Attach event listeners to all form inputs
function attachEventListeners() {
    // Personal Information
    document.getElementById('fullName').addEventListener('input', updateResumePreview);
    document.getElementById('email').addEventListener('input', updateResumePreview);
    document.getElementById('phone').addEventListener('input', updateResumePreview);
    document.getElementById('location').addEventListener('input', updateResumePreview);
    document.getElementById('linkedin').addEventListener('input', updateResumePreview);

    // Objective
    document.getElementById('objective').addEventListener('input', updateResumePreview);

    // Skills
    document.getElementById('skillsLanguages').addEventListener('input', updateResumePreview);
    document.getElementById('skillsTools').addEventListener('input', updateResumePreview);
    document.getElementById('skillsSubjects').addEventListener('input', updateResumePreview);
    document.getElementById('skillsSoft').addEventListener('input', updateResumePreview);

    // Experience
    document.getElementById('experience').addEventListener('input', updateResumePreview);

    // Certifications
    document.getElementById('certifications').addEventListener('input', updateResumePreview);

    // Interests
    document.getElementById('interests').addEventListener('input', updateResumePreview);

    // Declaration
    document.getElementById('declarationPlace').addEventListener('input', updateResumePreview);

    // Education entries (dynamic)
    const educationContainer = document.getElementById('educationContainer');
    educationContainer.addEventListener('input', function(e) {
        if (e.target.classList.contains('education-degree') || 
            e.target.classList.contains('education-institution') || 
            e.target.classList.contains('education-duration') || 
            e.target.classList.contains('education-score')) {
            updateResumePreview();
        }
    });

    // Project entries (dynamic)
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.addEventListener('input', function(e) {
        if (e.target.classList.contains('project-title') || 
            e.target.classList.contains('project-description')) {
            updateResumePreview();
        }
    });
}

// Add new education entry
function addEducation() {
    const container = document.getElementById('educationContainer');
    const newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = `
        <div class="form-row">
            <label>Degree / Class</label>
            <input type="text" class="education-degree" placeholder="B.Tech Computer Science">
        </div>
        <div class="form-row">
            <label>Institution</label>
            <input type="text" class="education-institution" placeholder="University Name">
        </div>
        <div class="form-row form-row-inline">
            <div>
                <label>Duration</label>
                <input type="text" class="education-duration" placeholder="2020 - 2024">
            </div>
            <div>
                <label>Score</label>
                <input type="text" class="education-score" placeholder="8.5 CGPA">
            </div>
        </div>
        <button type="button" class="btn-remove" onclick="removeEducation(this)">Remove</button>
    `;
    container.appendChild(newEntry);
    
    // Show remove buttons if more than one entry
    updateRemoveButtons('education-entry', 'educationContainer');
    saveToLocalStorage();
}

// Remove education entry
function removeEducation(button) {
    const entry = button.closest('.education-entry');
    entry.remove();
    updateRemoveButtons('education-entry', 'educationContainer');
    updateResumePreview();
    saveToLocalStorage();
}

// Add new project entry
function addProject() {
    const container = document.getElementById('projectsContainer');
    const newEntry = document.createElement('div');
    newEntry.className = 'project-entry';
    newEntry.innerHTML = `
        <div class="form-row">
            <label>Project Title</label>
            <input type="text" class="project-title" placeholder="Project Name">
        </div>
        <div class="form-row">
            <label>Description (one per line, use • for bullets)</label>
            <textarea class="project-description" rows="3" placeholder="• Feature 1&#10;• Feature 2&#10;• Technology used"></textarea>
        </div>
        <button type="button" class="btn-remove" onclick="removeProject(this)">Remove</button>
    `;
    container.appendChild(newEntry);
    
    // Show remove buttons if more than one entry
    updateRemoveButtons('project-entry', 'projectsContainer');
    saveToLocalStorage();
}

// Remove project entry
function removeProject(button) {
    const entry = button.closest('.project-entry');
    entry.remove();
    updateRemoveButtons('project-entry', 'projectsContainer');
    updateResumePreview();
    saveToLocalStorage();
}

// Update remove button visibility
function updateRemoveButtons(entryClass, containerId) {
    const container = document.getElementById(containerId);
    const entries = container.querySelectorAll('.' + entryClass);
    const removeButtons = container.querySelectorAll('.btn-remove');
    
    if (entries.length > 1) {
        removeButtons.forEach(btn => btn.style.display = 'block');
    } else {
        removeButtons.forEach(btn => btn.style.display = 'none');
    }
}

// Update resume preview
function updateResumePreview() {
    // Personal Information
    const name = document.getElementById('fullName').value || 'YOUR NAME';
    const email = document.getElementById('email').value || 'yourname@email.com';
    const phone = document.getElementById('phone').value || '+91 XXXXXXXXXX';
    const location = document.getElementById('location').value || 'City, State';
    const linkedin = document.getElementById('linkedin').value || 'linkedin.com/in/your-profile';

    document.getElementById('previewName').textContent = name.toUpperCase();
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewPhone').textContent = phone;
    document.getElementById('previewLocation').textContent = location;
    document.getElementById('previewLinkedIn').textContent = linkedin;

    // Objective
    const objective = document.getElementById('objective').value || 'A motivated fresher seeking opportunities to apply technical skills...';
    document.getElementById('previewObjective').textContent = objective;

    // Education
    updateEducationPreview();

    // Skills
    const languages = document.getElementById('skillsLanguages').value || '-';
    const tools = document.getElementById('skillsTools').value || '-';
    const subjects = document.getElementById('skillsSubjects').value || '-';
    const soft = document.getElementById('skillsSoft').value || '-';

    document.getElementById('previewSkillsLanguages').textContent = languages;
    document.getElementById('previewSkillsTools').textContent = tools;
    document.getElementById('previewSkillsSubjects').textContent = subjects;
    document.getElementById('previewSkillsSoft').textContent = soft;

    // Experience
    const experience = document.getElementById('experience').value.trim();
    const experienceSection = document.getElementById('previewExperienceSection');
    const experiencePreview = document.getElementById('previewExperience');
    
    if (experience) {
        experienceSection.style.display = 'block';
        experiencePreview.innerHTML = formatMultilineText(experience);
    } else {
        experienceSection.style.display = 'none';
    }

    // Projects
    updateProjectsPreview();

    // Certifications
    const certifications = document.getElementById('certifications').value.trim();
    const certificationsSection = document.getElementById('previewCertificationsSection');
    const certificationsPreview = document.getElementById('previewCertifications');
    
    if (certifications) {
        certificationsSection.style.display = 'block';
        certificationsPreview.innerHTML = formatMultilineText(certifications);
    } else {
        certificationsSection.style.display = 'none';
    }

    // Interests
    const interests = document.getElementById('interests').value.trim();
    const interestsSection = document.getElementById('previewInterestsSection');
    const interestsPreview = document.getElementById('previewInterests');
    
    if (interests) {
        interestsSection.style.display = 'block';
        interestsPreview.textContent = interests;
    } else {
        interestsSection.style.display = 'none';
    }

    // Declaration
    const declarationPlace = document.getElementById('declarationPlace').value || 'City, State';
    document.getElementById('previewDeclarationPlace').textContent = declarationPlace;

    // Save to localStorage
    saveToLocalStorage();
}

// Update education preview
function updateEducationPreview() {
    const container = document.getElementById('educationContainer');
    const entries = container.querySelectorAll('.education-entry');
    const previewContainer = document.getElementById('previewEducation');
    
    previewContainer.innerHTML = '';
    
    entries.forEach(entry => {
        const degree = entry.querySelector('.education-degree').value.trim();
        const institution = entry.querySelector('.education-institution').value.trim();
        const duration = entry.querySelector('.education-duration').value.trim();
        const score = entry.querySelector('.education-score').value.trim();
        
        if (degree || institution || duration || score) {
            const educationItem = document.createElement('div');
            educationItem.className = 'education-item';
            
            let html = '';
            if (degree || duration) {
                html += `<div class="education-header">
                    <strong>${degree || 'Degree'}</strong>
                    ${duration ? `<span class="education-duration">${duration}</span>` : ''}
                </div>`;
            }
            if (institution) {
                html += `<div>${institution}</div>`;
            }
            if (score) {
                html += `<div>Score: ${score}</div>`;
            }
            
            educationItem.innerHTML = html;
            previewContainer.appendChild(educationItem);
        }
    });
    
    if (previewContainer.innerHTML === '') {
        previewContainer.innerHTML = '<div class="education-item"><div class="education-header"><strong>B.Tech Computer Science</strong><span class="education-duration">2020 - 2024</span></div><div>University Name</div><div>Score: 8.5 CGPA</div></div>';
    }
}

// Update projects preview
function updateProjectsPreview() {
    const container = document.getElementById('projectsContainer');
    const entries = container.querySelectorAll('.project-entry');
    const previewContainer = document.getElementById('previewProjects');
    
    previewContainer.innerHTML = '';
    
    entries.forEach(entry => {
        const title = entry.querySelector('.project-title').value.trim();
        const description = entry.querySelector('.project-description').value.trim();
        
        if (title || description) {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            
            let html = '';
            if (title) {
                html += `<strong>${title}</strong>`;
            }
            
            if (description) {
                const lines = description.split('\n').filter(line => line.trim());
                if (lines.length > 0) {
                    html += '<ul>';
                    lines.forEach(line => {
                        // Remove leading bullets if present, then add as list item
                        const cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();
                        if (cleanLine) {
                            html += `<li>${cleanLine}</li>`;
                        }
                    });
                    html += '</ul>';
                }
            }
            
            projectItem.innerHTML = html;
            previewContainer.appendChild(projectItem);
        }
    });
    
    if (previewContainer.innerHTML === '') {
        previewContainer.innerHTML = '<div class="project-item"><strong>Project Name</strong><ul><li>Feature 1</li><li>Feature 2</li></ul></div>';
    }
}

// Format multiline text for display
function formatMultilineText(text) {
    const lines = text.split('\n').filter(line => line.trim());
    return lines.map(line => {
        const cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();
        return `<div>${cleanLine}</div>`;
    }).join('');
}

// Save form data to localStorage
function saveToLocalStorage() {
    const formData = {
        // Personal Information
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        linkedin: document.getElementById('linkedin').value,
        
        // Objective
        objective: document.getElementById('objective').value,
        
        // Education
        education: [],
        
        // Skills
        skillsLanguages: document.getElementById('skillsLanguages').value,
        skillsTools: document.getElementById('skillsTools').value,
        skillsSubjects: document.getElementById('skillsSubjects').value,
        skillsSoft: document.getElementById('skillsSoft').value,
        
        // Experience
        experience: document.getElementById('experience').value,
        
        // Projects
        projects: [],
        
        // Certifications
        certifications: document.getElementById('certifications').value,
        
        // Interests
        interests: document.getElementById('interests').value,
        
        // Declaration
        declarationPlace: document.getElementById('declarationPlace').value
    };
    
    // Save education entries
    const educationEntries = document.querySelectorAll('.education-entry');
    educationEntries.forEach(entry => {
        formData.education.push({
            degree: entry.querySelector('.education-degree').value,
            institution: entry.querySelector('.education-institution').value,
            duration: entry.querySelector('.education-duration').value,
            score: entry.querySelector('.education-score').value
        });
    });
    
    // Save project entries
    const projectEntries = document.querySelectorAll('.project-entry');
    projectEntries.forEach(entry => {
        formData.projects.push({
            title: entry.querySelector('.project-title').value,
            description: entry.querySelector('.project-description').value
        });
    });
    
    localStorage.setItem('resumeBuilderData', JSON.stringify(formData));
}

// Load saved data from localStorage
function loadSavedData() {
    const savedData = localStorage.getItem('resumeBuilderData');
    if (!savedData) return;
    
    try {
        const formData = JSON.parse(savedData);
        
        // Load personal information
        document.getElementById('fullName').value = formData.fullName || '';
        document.getElementById('email').value = formData.email || '';
        document.getElementById('phone').value = formData.phone || '';
        document.getElementById('location').value = formData.location || '';
        document.getElementById('linkedin').value = formData.linkedin || '';
        
        // Load objective
        document.getElementById('objective').value = formData.objective || '';
        
        // Load education
        if (formData.education && formData.education.length > 0) {
            const container = document.getElementById('educationContainer');
            container.innerHTML = '';
            
            formData.education.forEach((edu, index) => {
                if (index === 0) {
                    // Update first entry
                    const firstEntry = container.querySelector('.education-entry');
                    if (firstEntry) {
                        firstEntry.querySelector('.education-degree').value = edu.degree || '';
                        firstEntry.querySelector('.education-institution').value = edu.institution || '';
                        firstEntry.querySelector('.education-duration').value = edu.duration || '';
                        firstEntry.querySelector('.education-score').value = edu.score || '';
                    }
                } else {
                    // Add new entries
                    addEducation();
                    const entries = container.querySelectorAll('.education-entry');
                    const entry = entries[entries.length - 1];
                    entry.querySelector('.education-degree').value = edu.degree || '';
                    entry.querySelector('.education-institution').value = edu.institution || '';
                    entry.querySelector('.education-duration').value = edu.duration || '';
                    entry.querySelector('.education-score').value = edu.score || '';
                }
            });
            
            updateRemoveButtons('education-entry', 'educationContainer');
        }
        
        // Load skills
        document.getElementById('skillsLanguages').value = formData.skillsLanguages || '';
        document.getElementById('skillsTools').value = formData.skillsTools || '';
        document.getElementById('skillsSubjects').value = formData.skillsSubjects || '';
        document.getElementById('skillsSoft').value = formData.skillsSoft || '';
        
        // Load experience
        document.getElementById('experience').value = formData.experience || '';
        
        // Load projects
        if (formData.projects && formData.projects.length > 0) {
            const container = document.getElementById('projectsContainer');
            container.innerHTML = '';
            
            formData.projects.forEach((proj, index) => {
                if (index === 0) {
                    // Update first entry
                    const firstEntry = container.querySelector('.project-entry');
                    if (firstEntry) {
                        firstEntry.querySelector('.project-title').value = proj.title || '';
                        firstEntry.querySelector('.project-description').value = proj.description || '';
                    }
                } else {
                    // Add new entries
                    addProject();
                    const entries = container.querySelectorAll('.project-entry');
                    const entry = entries[entries.length - 1];
                    entry.querySelector('.project-title').value = proj.title || '';
                    entry.querySelector('.project-description').value = proj.description || '';
                }
            });
            
            updateRemoveButtons('project-entry', 'projectsContainer');
        }
        
        // Load certifications
        document.getElementById('certifications').value = formData.certifications || '';
        
        // Load interests
        document.getElementById('interests').value = formData.interests || '';
        
        // Load declaration
        document.getElementById('declarationPlace').value = formData.declarationPlace || '';
        
        // Update preview
        updateResumePreview();
    } catch (e) {
        console.error('Error loading saved data:', e);
    }
}

// Clear form
function clearForm() {
    if (confirm('Are you sure you want to clear all form data? This cannot be undone.')) {
        document.getElementById('resumeForm').reset();
        document.getElementById('educationContainer').innerHTML = `
            <div class="education-entry">
                <div class="form-row">
                    <label>Degree / Class</label>
                    <input type="text" class="education-degree" placeholder="B.Tech Computer Science">
                </div>
                <div class="form-row">
                    <label>Institution</label>
                    <input type="text" class="education-institution" placeholder="University Name">
                </div>
                <div class="form-row form-row-inline">
                    <div>
                        <label>Duration</label>
                        <input type="text" class="education-duration" placeholder="2020 - 2024">
                    </div>
                    <div>
                        <label>Score</label>
                        <input type="text" class="education-score" placeholder="8.5 CGPA">
                    </div>
                </div>
                <button type="button" class="btn-remove" onclick="removeEducation(this)" style="display: none;">Remove</button>
            </div>
        `;
        document.getElementById('projectsContainer').innerHTML = `
            <div class="project-entry">
                <div class="form-row">
                    <label>Project Title</label>
                    <input type="text" class="project-title" placeholder="Project Name">
                </div>
                <div class="form-row">
                    <label>Description (one per line, use • for bullets)</label>
                    <textarea class="project-description" rows="3" placeholder="• Feature 1&#10;• Feature 2&#10;• Technology used"></textarea>
                </div>
                <button type="button" class="btn-remove" onclick="removeProject(this)" style="display: none;">Remove</button>
            </div>
        `;
        localStorage.removeItem('resumeBuilderData');
        attachEventListeners();
        updateResumePreview();
    }
}

// Print resume
function printResume() {
    window.print();
}

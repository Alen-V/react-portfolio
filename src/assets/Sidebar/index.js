export const getAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const moreInformation = [
    ['residence:', 'macedonia'],
    ['city:', 'skopje'],
    ['age:', getAge('8/4/98')],
    ['email:', <a href="mailto: alenvatic7@gmail.com">alenvatic7@gmail.com</a>],
    ['mobile:', '+389 78 314 238']
]

export const contactInfoItems = [
    ['https://www.linkedin.com/in/alen-vatic-a0b61815b/', 'linkedin'],
    ['https://github.com/Alen-V', 'github'],
    ['https://gitlab.com/alenvatic7', 'gitlab'],
    ['mailto: alenvatic7@gmail.com', 'fas fa-envelope-open']
]

export const navItems = ['home', 'projects', 'about', 'contact'] 
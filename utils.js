function createProjectCard(project, openPopup, openPopupImages) {
   const { id, createdAt, category, title, images, icon } = project

   const projectCard = document.createElement('div')
   const img = document.createElement('img')
   const h1 = document.createElement('h1')
   const pDate = document.createElement('p')
   const pIcon = document.createElement('p')
   const pButton = document.createElement('p')
   const button = document.createElement('button')

   img.src = images[0]
   img.alt = title
   img.style.width = '100%'
   img.style.height = '200'

   h1.textContent = title
   pDate.textContent = createdAt
   button.textContent = 'Read more'

   projectCard.classList.add('project-card')
   h1.classList.add('project-card-title')
   pDate.classList.add('date')
   pIcon.classList.add('project-card-icon')
   button.classList.add('show-more-btn')

   button.setAttribute('data-category', category)
   button.setAttribute('data-projectid', id)

   img.setAttribute('data-category', category)
   img.setAttribute('data-projectId', id)

   button.addEventListener('click', openPopup)
   img.addEventListener('click', openPopupImages)

   pIcon.innerHTML = icon
   pButton.appendChild(button)

   projectCard.appendChild(img)
   projectCard.appendChild(h1)
   projectCard.appendChild(pDate)
   projectCard.appendChild(pIcon)
   projectCard.appendChild(pButton)

   return projectCard
}
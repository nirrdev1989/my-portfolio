const popupContainer = document.querySelector('.project-popup')
const popupContainerImages = document.querySelector('.project-popup-images')
const imgSlider = document.querySelector('.popup-images-slider-img-wrapper img')

document.querySelector('.close-popup-btn').addEventListener('click', closePopup)
document.querySelector('.close-popup-images-btn').addEventListener('click', closePopupImages)
document.querySelector('.arrow-left-slider-btn').addEventListener('click', prevItem)
document.querySelector('.arrow-right-slider-btn').addEventListener('click', nextItem)


let currentProject = null
let imageSlideIndex = 0


dispalyProjects()

function dispalyProjects() {
   const projectsContainer = document.querySelector('.projects-grid')

   portfolioItemsMap.forEach((category) => {
      category.items.forEach((item) => {
         projectsContainer.appendChild(createProjectCard({ ...item, icon: category.icon }, openPopup, openPopupImages))
      })
   })
}


function nextItem(event) {
   imageSlideIndex++
   imageSlideIndex %= currentProject.images.length
   imgSlider.src = currentProject.images[imageSlideIndex]
}

function prevItem(event) {
   imageSlideIndex--
   imageSlideIndex = (imageSlideIndex + currentProject.images.length) % currentProject.images.length
   imgSlider.src = currentProject.images[imageSlideIndex]
}


function closePopup() {
   showScroll(true)
   popupContainer.classList.remove('open')
}

function closePopupImages() {
   showScroll(true)
   popupContainerImages.classList.remove('open')
   document.querySelector('.arrow-left-slider-btn').classList.remove('show')
   document.querySelector('.arrow-right-slider-btn').classList.remove('show')
}

function openPopupImages(event) {
   showScroll(false)
   imageSlideIndex = 0
   currentProject = null
   popupContainerImages.classList.add('open')
   document.querySelector('.arrow-left-slider-btn').classList.add('show')
   document.querySelector('.arrow-right-slider-btn').classList.add('show')

   const projectId = event.target.getAttribute('data-projectid')
   const category = event.target.getAttribute('data-category')

   const currentCategory = portfolioItemsMap.get(category)

   currentProject = currentCategory.items.find((item) => {
      return item.id === projectId
   })

   imgSlider.src = currentProject.images[imageSlideIndex]
}

function openPopup(event) {
   showScroll(false)
   popupContainer.classList.add('open')

   const projectId = event.target.getAttribute('data-projectid')
   const category = event.target.getAttribute('data-category')

   const currentCategory = portfolioItemsMap.get(category)

   const project = currentCategory.items.find((item) => {
      return item.id === projectId
   })

   document.querySelector('.project-popup-titile').textContent = project.title
   document.querySelector('.d-text').textContent = project.description.text
   document.querySelector('.d-technologies').textContent = project.description.technologies
   document.querySelector('.d-responsibility').textContent = project.description.responsibility

   const githubLinkA = document.querySelector('.github-link')
   const websiteLinkA = document.querySelector('.website-link')

   githubLinkA.href = project.githubLink
   githubLinkA.textContent = project.githubLink
   if (!project.websiteLink) {
      websiteLinkA.href = '#home'
      websiteLinkA.textContent = 'No link yet'
   } else {
      websiteLinkA.href = project.websiteLink
      websiteLinkA.textContent = project.websiteLink
   }
}

function showScroll(show) {
   console.log(document.documentElement.style.overflow)
   document.documentElement.style.overflow = show ? 'unset' : 'hidden'
}

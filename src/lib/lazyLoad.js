const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}

export default {
  mounted: el => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.src = el.dataset.url
        if (el.complete) {
          loaded()
        } else {
          el.addEventListener('load', loaded)
        }
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)

    const loaded = () => {
      el.style.opacity = "1"
      el.parentElement.style.padding = 0
    }
  }
};
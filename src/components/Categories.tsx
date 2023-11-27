import '../styles/components/_categories.scss'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const categoriesList = [
  { id: 1, title: 'All Categories' },
  { id: 2, title: 'Pop' },
  { id: 3, title: 'Rock' },
  { id: 4, title: 'Alternative Indie' },
  { id: 5, title: 'Rap' },
  { id: 6, title: 'Techno' },
  { id: 7, title: 'All Categories' },
  { id: 8, title: 'Pop' },
  { id: 9, title: 'Rock' },
  { id: 10, title: 'Alternative Indie' },
  { id: 11, title: 'Rap' },
  { id: 12, title: 'Techno' },
]

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [width, setWidth] = useState(0)
  const dragSlider = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (dragSlider.current) {
      const widthConstraint =
        dragSlider.current.scrollWidth - dragSlider.current.offsetWidth
      setWidth(widthConstraint > 0 ? widthConstraint : 0)
    }
  }, [])
  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId)
  }

  return (
    <section className="categories">
      <motion.div
        ref={dragSlider}
        drag="x"
        dragConstraints={{ right: 0, left: -width - 75 }}
        className="categories__wrapper"
      >
        {categoriesList.map((item) => (
          <motion.div
            ref={dragSlider}
            className={`categories__item ${
              selectedCategory === item.id ? 'selected' : ''
            }`}
            key={item.id}
            onClick={() => handleCategoryClick(item.id)}
          >
            {item.title}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

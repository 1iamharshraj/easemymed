import React from 'react'
import blog1 from "../Images/blog1.png"
import blog2 from "../Images/blog4.png"
import blog3 from "../Images/blog5.png"
import { Link } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const blogCard = [
  {
    id: 1,
    img: blog1,
    title: 'Augmented Reality: Revolutionizing Medical Surgery',
    date: 'Sept 19, 2024',
    link: '/augmented-reality-revolutionizing-medical-surgery'
  },
  {
    id: 2,
    img: blog2,
    title: 'Transforming Surgery with Artificial Intelligence',
    date: 'Sept 19, 2024',
    link: '/transforming-surgery-with-ai'
  },
  {
    id: 3,
    img: blog3,
    title: 'From Theory to Practice: Challenges in Bringing AR and AI to Medical Settings',
    date: 'Sept 19, 2024',
    link: '/ar-ai-in-medicine'
  }
]

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <section className='px-mobile xl:px-xlarge lg:px-large 2xl:max-w-[1440px] 2xl:mx-auto sm:py-24 py-16'>
      <div className='  grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2'>
        {
          blogCard.map((blog) => (
            <div
              key={blog.id} className='cursor-pointer'>
              <Link to={`${blog.link}`}>
                <img className='hover:scale-[1.02] transition-all ease-in-out duration-200' src={blog.img} alt="blog-img" />

                <div className='pt-4'>
                  <u className='font-bold'>{blog.title}</u>
                  <p className='pt-1'>{blog.date}</p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default Blogs
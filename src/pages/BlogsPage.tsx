import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

const BlogsPage = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen w-full py-16 px-4 md:px-8'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center'>Our Blogs</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Blog Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
            >
              <div className='p-6'>
                <h2 className='text-xl font-semibold text-green-900 mb-3'>Why Operate with a Polyhouse/Greenhouse?</h2>
                <p className='text-gray-600 mb-4 line-clamp-3'>
                  A Polyhouse or Greenhouse is a structure built to protect crops and create optimal growing conditions through the greenhouse effect. Learn about its working principles, technical aspects, and advantages for modern agriculture.
                </p>
                <Link
                  to="/blog/polyhouse-greenhouse"
                  className='inline-block bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors duration-300'
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BlogsPage
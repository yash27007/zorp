import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

const PolyhouseBlogPage = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-screen w-full py-8 md:py-16 px-4 sm:px-6 md:px-8 overflow-x-hidden'>
                <article className='max-w-4xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-6 md:mb-8 leading-tight'>
                            Why Operate with a Polyhouse/Greenhouse?
                        </h1>

                        <section className='mb-6 md:mb-8'>
                            <h2 className='text-xl sm:text-2xl font-semibold text-green-800 mb-3 md:mb-4'>
                                What is a polyhouse/greenhouse?
                            </h2>
                            <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
                                A Polyhouse or a Greenhouse is a Structure that is built to protect crops and also create a
                                greenhouse effect which creates the most optimal conditions to grow crops.
                            </p>
                        </section>

                        <section className='mb-6 md:mb-8'>
                            <h2 className='text-xl sm:text-2xl font-semibold text-green-800 mb-3 md:mb-4'>
                                How does it work?
                            </h2>
                            <p className='text-gray-700 text-base sm:text-lg leading-relaxed mb-4'>
                                We all have questions of how everything works especially when we are utilising it in business and
                                how it gives us returns on our investment. Yes, it matters here as well so let's get to the
                                functioning of a polyhouse/greenhouse for cultivation of crops.
                            </p>
                            <div className='flex justify-center my-6 md:my-10'>
                                <img
                                    src="/Images/Blogs/polyhouse/image.png"
                                    alt="Illustration of a polyhouse/greenhouse"
                                    className='w-full max-w-2xl h-auto rounded-lg shadow-lg'
                                />
                            </div>
                            <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
                                Above is the illustration of how a polyhouse/greenhouse functions. and this illustration is of the
                                generic version that is used.
                            </p>
                        </section>

                        <section className='mb-6 md:mb-8'>
                            <h2 className='text-xl sm:text-2xl font-semibold text-green-800 mb-3 md:mb-4'>
                                Technicality
                            </h2>
                            <ul className='list-disc pl-4 sm:pl-6 text-gray-700 text-base sm:text-lg space-y-2'>
                                <li>Cold air enters the polyhouse/greenhouse from the side.</li>
                                <li>Then as the cold air flows in, the light that enters the polyhouse is converted to heat.</li>
                                <li>The heat warms up the cold air that has entered creating a humidification in the air.</li>
                                <li>The hot air as usual rises and exits out of the vent at the top since hot air is lighter than cold air.</li>
                                <li>If not escaped the polyhouse loses humidity and makes it dry such that the place becomes dry very similar to a desert.</li>
                                <li>Since these conditions are met the polyhouse/greenhouse gives the right factors for growth.</li>
                            </ul>
                        </section>

                        <section className='mb-6 md:mb-8'>
                            <h2 className='text-xl sm:text-2xl font-semibold text-green-800 mb-3 md:mb-4'>
                                Advantages of having a Polyhouse
                            </h2>
                            <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
                                Advantages being during rains the polyhouse prevents crop damage. Additionally when it comes
                                down to excessive hot days, we have an option to pull in shade nets which reduces the excessive
                                heat and light. On the whole a Polyhouse is a protection factor and a control factor while growing
                                crops.
                            </p>
                        </section>
                    </motion.div>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default PolyhouseBlogPage; 
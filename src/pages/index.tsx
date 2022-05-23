import Layout from '@/components/Layout'
import Text from '@/components/Typography'

const Home = () => {
  return (
    <Layout>
      <div className="mx-auto my-16 max-w-screen-lg  px-6 md:my-20 md:px-10 lg:my-24">
        <section className="grid grid-cols-12">
          <Text size="large" as="h1" className="col-span-8 font-bold">
            Hi 👋, I am <span className="text-accent">Saurabh</span>
          </Text>

          <Text
            size="text"
            as="p"
            className="col-span-7 mt-4 leading-relaxed text-gray-700"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            ipsum dolor, saepe ab dignissimos iste iusto.
          </Text>
        </section>
      </div>
    </Layout>
  )
}

export default Home

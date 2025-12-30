import { Section } from '../components/Section'
import { Button } from '../components/Button'

export const Home = () => {
  return (
    <Section id="home" className="bg-red-50 min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Our Website</h1>
        <p className="text-xl text-gray-600 mb-8">
          A clean, simple, and modern static website
        </p>
        <Button>Get Started</Button>
      </div>
    </Section>
  )
}


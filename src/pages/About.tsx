import { Section } from '../components/Section'

export const About = () => {
  return (
    <Section id="about">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is a simple, clean static website built with React and Vite.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our goal is to provide a maintainable codebase that's easy to understand and scale.
        </p>
      </div>
    </Section>
  )
}


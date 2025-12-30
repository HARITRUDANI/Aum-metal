import { Section } from '../components/Section'

export const Services = () => {
  return (
    <Section id="services" className="bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Service 1</h3>
            <p className="text-gray-600">Description of service one.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Service 2</h3>
            <p className="text-gray-600">Description of service two.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Service 3</h3>
            <p className="text-gray-600">Description of service three.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}


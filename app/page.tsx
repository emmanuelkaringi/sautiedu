import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="The Brainy Explorer"
          topic="Network of the brain"
          subject="Math"
          duration={50}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="Geography"
          duration={45}
          color="#ffda6e"
        />
      </section>

      <section className='home-section'>
        <CompanionsList />
        <CTA />
      </section>
    </main>
  )
}

export default Page
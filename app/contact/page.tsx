import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
	return (
		<>
			<PageHeader
				title='Contact Us'
				subtitle='Begin Your Journey'
				image='https://images.unsplash.com/photo-1625409393437-1234a9468903?q=80&w=2666&auto=format&fit=crop'
			/>

			<Section className='bg-background'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
					{/* Contact Info */}
					<div className='space-y-8'>
						<div>
							<h2 className='text-3xl font-[family-name:var(--font-playfair)] text-primary mb-4'>
								Get in Touch
							</h2>
							<p className='text-muted-foreground leading-relaxed'>
								Whether you are ready to book your trip or just
								at the dreaming stage, our travel specialists
								are here to assist you.
							</p>
						</div>

						<div className='space-y-6'>
							<div className='border-l-2 border-accent pl-6 py-2'>
								<span className='block text-xs uppercase tracking-widest text-muted-foreground mb-1'>
									Email Us
								</span>
								<a
									href='mailto:concierge@ceilao.com'
									className='text-xl font-medium text-primary hover:text-accent transition-colors'
								>
									concierge@ceilao.com
								</a>
							</div>
							<div className='border-l-2 border-accent pl-6 py-2'>
								<span className='block text-xs uppercase tracking-widest text-muted-foreground mb-1'>
									Call Us
								</span>
								<a
									href='tel:+94112345678'
									className='text-xl font-medium text-primary hover:text-accent transition-colors'
								>
									+94 11 234 5678
								</a>
							</div>
							<div className='border-l-2 border-accent pl-6 py-2'>
								<span className='block text-xs uppercase tracking-widest text-muted-foreground mb-1'>
									Visit Us
								</span>
								<p className='text-lg text-primary'>
									No. 45, Galle Road, Colombo 03, Sri Lanka
								</p>
							</div>
						</div>
					</div>

					{/* Form */}
					<div className='bg-secondary/10 p-8 md:p-10 rounded-lg border border-primary/5'>
						<form className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='space-y-2'>
									<label
										htmlFor='firstName'
										className='text-sm font-medium uppercase tracking-wider text-primary'
									>
										First Name
									</label>
									<input
										id='firstName'
										className='w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent'
										placeholder='John'
									/>
								</div>
								<div className='space-y-2'>
									<label
										htmlFor='lastName'
										className='text-sm font-medium uppercase tracking-wider text-primary'
									>
										Last Name
									</label>
									<input
										id='lastName'
										className='w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent'
										placeholder='Doe'
									/>
								</div>
							</div>
							<div className='space-y-2'>
								<label
									htmlFor='email'
									className='text-sm font-medium uppercase tracking-wider text-primary'
								>
									Email Address
								</label>
								<input
									id='email'
									type='email'
									className='w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent'
									placeholder='john@example.com'
								/>
							</div>
							<div className='space-y-2'>
								<label
									htmlFor='message'
									className='text-sm font-medium uppercase tracking-wider text-primary'
								>
									Your Message
								</label>
								<textarea
									id='message'
									rows={4}
									className='w-full bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none'
									placeholder='Tell us about your dream trip...'
								/>
							</div>
							<Button
								type='submit'
								size='lg'
								className='w-full'
							>
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</Section>
		</>
	);
}

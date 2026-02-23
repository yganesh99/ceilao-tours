import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms and Conditions | Ceilão Travel & Tours',
	description:
		'Read our Terms and Conditions to understand the rules and regulations for using Ceilão Travel & Tours services.',
};

export default function TermsAndConditionsPage() {
	return (
		<main className='py-16 md:py-24 bg-background min-h-screen text-foreground'>
			<div className='container mx-auto px-6 max-w-4xl'>
				<div className='mb-12 text-center mt-20 border-accent border'>
					<h1 className='text-3xl md:text-5xl font-playfair text-[#1f2b44] mb-2'>
						Terms and Conditions
					</h1>
					<p className='text-[#1f2b44]/60 font-playfair text-xs uppercase tracking-widest'>
						Last Updated: February 2026
					</p>
				</div>

				<div className='bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-sm text-foreground/80 font-inter leading-relaxed space-y-8 border-accent border'>
					<section>
						<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
							1. Registration and Licensing
						</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>
								<strong className='text-[#1f2b44]'>
									Company Information:
								</strong>{' '}
								This website is operated by Ceilão Travel &
								Tours (Private) Limited, a company duly
								incorporated under the laws of Sri Lanka.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Business Registration:
								</strong>{' '}
								We are registered with the Registrar of
								Companies under Registration Number PV 00349070.
								Our registered office is located at No 40, 1st
								cross street, Dippitigoda road, Dalugama,
								Kelaniya, Sri Lanka.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									24/7 Support:
								</strong>{' '}
								We provide 24-hour emergency assistance for our
								guests. For urgent support during your tour,
								please contact our hotline at +94 77 131 9489.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
							2. Website User Agreement
						</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>
								<strong className='text-[#1f2b44]'>
									Acceptable Use:
								</strong>{' '}
								You may use this website solely for lawful
								purposes. You agree not to upload harmful,
								offensive, or inappropriate content, nor
								introduce malware or attempt unauthorized
								network access.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Intellectual Property:
								</strong>{' '}
								All trademarks, copyrights, and designs are the
								property of Ceilão Travel & Tours or its
								licensors. Content may only be downloaded or
								printed for personal, non-commercial use.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Age and Responsibility:
								</strong>{' '}
								By using this site, you confirm you are of legal
								age and capacity to enter into binding legal
								obligations and accept full responsibility for
								all activity conducted through your account.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
							3. Booking, Pricing, and Taxation
						</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>
								<strong className='text-[#1f2b44]'>
									Pricing Policy:
								</strong>{' '}
								Rates are net and include standard government
								taxes (currently 13%).
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Tax and Price Revisions:
								</strong>{' '}
								Rates are subject to revision in the event of
								official changes to government taxes (including
								VAT or SSCL) or significant unforeseen
								escalations in fuel prices or entrance fees. Any
								such adjustments will be billed with reasonable
								prior notice.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Special Requests:
								</strong>{' '}
								Any special requirements (e.g., dietary needs,
								allergies, room location) must be advised at the
								time of booking and confirmed in writing. While
								we will make every effort to communicate these
								to our service providers, their fulfillment is
								subject to availability and cannot be
								guaranteed.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
							4. Cancellation & Refund Policy
						</h2>
						<p className='mb-4'>
							This section details the financial implications of
							changing or cancelling a booking:
						</p>
						<ul className='list-disc pl-5 space-y-2'>
							<li>
								<strong className='text-[#1f2b44]'>
									Cancellation Charges:
								</strong>
								<ul className='list-circle pl-5 mt-2 space-y-1'>
									<li>
										14 days or less prior to arrival: 100%
										cancellation fee.
									</li>
									<li>
										15 to 28 days prior to arrival: 50%
										cancellation fee or the equivalent of
										the first two days' charges.
									</li>
									<li>
										29 days or more prior to arrival: No
										cancellation fees apply, provided no
										non-refundable advance payments have
										been made to third-party suppliers
										(e.g., hotels or airlines).
									</li>
								</ul>
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Cancellation Process:
								</strong>{' '}
								Customers cancelling through the company (rather
								than the hotel directly) may receive a
								cancellation confirmation code to avoid
								"No-Show" charges from hotels.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Currency & Refunds:
								</strong>{' '}
								Payments are accepted in LKR or US$. The company
								is not liable for currency exchange gains or
								losses resulting from refunds.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Discrepancies:
								</strong>{' '}
								Any communication issues regarding cancellation
								or refund discrepancies must be brought to our
								attention in writing within 10 days of the
								cancellation request.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
							5. Operational Safeguards and Liability
						</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>
								<strong className='text-[#1f2b44]'>
									Force Majeure:
								</strong>{' '}
								Ceilão Travel & Tours shall not be liable for
								any failure to perform its obligations where
								such failure results from "Acts of God"
								(including floods or monsoons), war, strikes,
								pandemics, or government-imposed lockdowns.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Third-Party Providers:
								</strong>{' '}
								We act as an agent for hotels and transport
								providers. While we strive to secure the
								specific hotels mentioned in your proposal, we
								reserve the right to book alternative properties
								of a similar standard if the original is
								unavailable.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Wildlife and Safari Risk:
								</strong>{' '}
								Visits to wildlife parks and participation in
								safari tours are undertaken at the client's own
								risk. Safari vehicles typically provide only
								basic insurance coverage as per local
								regulations.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
							6. Traveler Responsibilities
						</h2>
						<ul className='list-disc pl-5 space-y-2'>
							<li>
								<strong className='text-[#1f2b44]'>
									Travel Insurance:
								</strong>{' '}
								It is a mandatory recommendation that all
								clients obtain comprehensive travel, medical,
								and cancellation insurance before arrival in Sri
								Lanka to cover unforeseen illness, injury, or
								trip interruptions.
							</li>
							<li>
								<strong className='text-[#1f2b44]'>
									Passports and Visas:
								</strong>{' '}
								Guests are solely responsible for ensuring they
								possess a valid passport (minimum 6 months
								validity) and the correct visa/ETA for entry
								into Sri Lanka.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-2xl font-playfair text-[#1f2b44] mb-4'>
							7. Governing Law
						</h2>
						<p>
							These terms are governed by the laws of the
							Democratic Socialist Republic of Sri Lanka, and
							users irrevocably submit to the non-exclusive
							jurisdiction of the courts of Sri Lanka.
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}

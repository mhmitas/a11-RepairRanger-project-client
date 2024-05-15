import React from 'react';

const HomeFaq = () => {
    const faqs = [
        {
            question: "Can I request recommendations for reputable home repair service providers in my area through this platform?",
            answer: "Yes, you can certainly ask for recommendations for reputable service providers in your area. Feel free to post your request along with any specific requirements or preferences you have. Our community members are often happy to share their experiences and provide suggestions based on their own interactions with service providers."
        },
        {
            question: "How quickly can I expect a response to my home repair question on the platform?",
            answer: "Response times may vary depending on the complexity of your question and the availability of community members or experts. Typically, you can expect to receive responses within a few hours to a day. Remember, providing detailed information about your issue can help expedite the process."
        },
        {
            question: "Are there any recommended best practices for describing my home repair issue to ensure I get helpful responses?",
            answer: "Absolutely! When describing your home repair issue, be sure to include specific details such as the type of repair needed, any relevant symptoms or observations, and your location. Including photos or videos can also provide valuable context for other users to better understand your problem and offer more accurate advice."
        },
        {
            question: "What should I do if I encounter a problem or dispute with a service provider booked through the platform?",
            answer: "If you encounter any issues or disputes with a service provider booked through the platform, we recommend first trying to resolve the matter directly with the provider. Open communication can often help clarify misunderstandings and find mutually satisfactory solutions. If you're unable to resolve the issue, you can reach out to our support team for assistance."
        },
        {
            question: "Can I view reviews or ratings of home repair service providers before booking their services?",
            answer: "Yes, you can typically view reviews and ratings of home repair service providers on their service listings. These reviews are submitted by other users who have previously engaged with the provider's services. Reading reviews can help you make informed decisions and choose a provider that best meets your needs and expectations."
        },
        {
            question: "Is there a way to receive notifications when someone responds to my home repair question or when a service provider updates the status of my booked service?",
            answer: "Yes, you can opt-in to receive notifications for various activities on the platform, including responses to your questions and updates on booked services. You can manage your notification settings in your account preferences to customize the types of notifications you receive and how you receive them (e.g., email, push notifications)."
        },
        {
            question: "How can I ensure the safety and security of my personal information when using this platform to book home repair services?",
            answer: "We take the privacy and security of our users' personal information very seriously. Our platform employs robust security measures to protect your data from unauthorized access or misuse. Additionally, we recommend exercising caution when sharing sensitive information and only providing necessary details to service providers you trust. If you have any concerns about privacy or security, please don't hesitate to contact us for assistance."
        }
    ];


    return (
        <div className=' my-16'>
            <h3 className='text-2xl font-semibold py-4 text-center'>FAQs</h3>
            <div>
                {faqs.map((faq, idx) => <FaqCard faq={faq} index={idx} key={idx}></FaqCard>)}
            </div>
        </div>
    );
};

export default HomeFaq;

function FaqCard({ faq }) {
    return (
        <div className="collapse collapse-arrow bg-base-100 mb-4 rounded-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                {faq.question}
            </div>
            <div className="collapse-content">
                <p>{faq.answer}</p>
            </div>
        </div>
    )
}
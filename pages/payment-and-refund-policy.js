import Link from "next/link";
import Head from "next/head";
function RefundPolicyPage() {
    return ( 
        <>
        <Head>
        <title>Payment and Refund Policy | Coding Chaska</title>
        <meta name="description" content="Read the Payment and Refund Policy of Learning Setu Private Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      </Head>
      
        <div className="container max-w-none">
        <div className="text-sm breadcrumbs">
  <ul>
    <li>
      <Link href={"/"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
        Home
      </Link>
    </li> 
    <li>
      Refund Policy
    </li>
  </ul>
</div>


<br />

<div class="md:w-2/4 prose max-w-none m-auto">
    <h2 class="text-2xl font-bold mb-4">Payment and Refund Policy</h2>
    <p>Thank you for choosing <span class="font-semibold">Coding Chaska</span>! Below is our Payment and Refund Policy to guide you through the process:</p>

    <h3 class="text-lg font-bold mt-4">Payment</h3>
    <p>Payment for our courses and services can be made through various methods including credit/debit card, bank transfer, or online payment platforms. The payment process may vary depending on the selected course or service. Please refer to the payment instructions provided during the enrollment process.</p>

    <h3 class="text-lg font-bold mt-4">Installment Payments</h3>
    <p>For your convenience, we offer installment payment options for certain courses and services. Installment plans may vary in terms of duration and frequency of payments. Please review the installment payment details provided at the time of enrollment.</p>

    <h3 class="text-lg font-bold mt-4">Refunds</h3>
    <p>We understand that circumstances may arise that require a refund. Please review the following refund policy:</p>

    <ol>
        <li>
            <strong>Course Refunds (One-time Payment)</strong>:
            <ul>                
                <li>Full refunds will be provided if a cancellation request is made before the course starts.</li>
                <li>Partial refunds will be provided if a cancellation request is made within 5 days of the course start date.</li>
                <li>No refunds will be issued after 5 days of course start date.</li>
                <li>To request a refund, please contact us at <span class="font-semibold">codingchaska.info@gmail.com</span> and provide your full name, email address, course name, and reason for the refund request.</li>
            </ul>
        </li>
        <li>
            <strong>Service Refunds</strong>:
            <ul>
                <li>For services such as tutoring sessions or consultations, refunds will be provided if a cancellation request is made at least <span class="font-semibold">10 hours</span> prior to the scheduled session.</li>
                <li>No refunds will be issued for cancellations made less than <span class="font-semibold">10 hours</span> before the scheduled session.</li>
                <li>To request a refund for a service, please contact us at <span class="font-semibold">codingchaska.info@gmail.com</span> with your full name, email address, service details, and reason for the refund request.</li>
            </ul>
        </li>
        <li>
            <strong>Installment Payments</strong>:
            <ul>
                <li>No refunds will be applicable after the course starts for courses or services paid in installments.</li>
                <li>Failure to make payment by the specified date of an installment will result in the cancellation of your admission.</li>
                <li>To inquire about installment payment refunds, please contact us at <span class="font-semibold">codingchaska.info@gmail.com</span> with your full name, email address, course/service details, and reason for the refund request.</li>
            </ul>
        </li>
        <li>
            <strong>Processing Time</strong>:
            <ul>
                <li>Refunds will be processed within <span class="font-semibold">3 business days</span> of receiving a valid refund request.</li>
                <li>Please note that it may take additional time for the refunded amount to reflect in your account, depending on your bank or payment provider.</li>
            </ul>
        </li>
        <li>
            <strong>Exceptions</strong>:
            <ul>
                <li>In cases where <span class="font-semibold">Coding Chaska</span> fails to deliver the promised course or service, a full refund will be provided regardless of the time elapsed since the start date.</li>
                <li>Refunds may be subject to additional terms and conditions for promotional offers or special circumstances, as specified at the time of purchase.</li>
            </ul>
        </li>
    </ol>

    <p>Coding Chaska reserves the right to modify or update this payment and refund policy at any time without prior notice. Any changes will be effective immediately upon posting on our website. Please check our website periodically for updates.</p>

    <p>By using our services, you acknowledge that you have read, understood, and agreed to this payment and refund policy.</p>
</div>




        </div>    
        </>
     );
}

export default RefundPolicyPage;
import classes from './TermsAndConditions.module.css';

import { Grid, Typography } from "@mui/material";

const TermsAndConditions = () => {
    return (
        <Grid container className={classes.mainWrapper}>
            <Grid item sm={10}>
                <Typography variant="h3">Terms of Use</Typography>
                <Typography variant="p">These Terms of Use, hereinafter referred to as "Terms and Conditions" or "T&C" or "Terms" or "Agreement," along with any other Policy or Statement or Information that may be placed on this website, hereinafter referred to as "Company" or “Website” or “We” or “Us,” as modified or amended from time to time, are a binding contract between the company and you, hereinafter referred to as "You" or "User" or "Your" or "Buyer" or "Customer."
                    If you visit, use, or shop at the site or any future site operated by us, you accept these Terms and Conditions. In addition, when you use any current or future services of the company or visit or purchase from any business affiliated with the company or third-party vendors, whether or not included in the site, you also will be subject to the guidelines and conditions applicable to such service or merchant. If these conditions are inconsistent with such guidelines and conditions, such guidelines and conditions will control.
                    By subscribing to or using any of our products or services, you agree that you have read, understood, and are bound by the Terms and Conditions, regardless of how you subscribe to or use our products or services. If you do not want to be bound by the terms, you must not subscribe to or use our services.
                </Typography>
                <Typography variant="h3">
                    Returns and Refunds
                </Typography>

                <Typography variant="p">
                    If returning an item, you will be responsible for the shipment, all related costs, and risks related to the return shipment.


                    Items may be returned up to 14 days from receiving the order. We only accept resalable items in its original packaging with the tags attached and in the same state as received, unused and undamaged.


                    Personalized items are made to order; we are unable to accommodate refunds or exchanges to personalized pieces once your order has been submitted.


                    After receiving and reviewing your return, you will receive a new product or refund as soon as possible.
                </Typography>

                <Typography variant="h3">
                    Order Cancellation / Modification
                </Typography>

                <Typography variant="p">
                    If you decide to cancel or modify your order, please write to us as soon as possible. We will do our best to make the change. If it’s too late for our team to cancel/modify your order, you can return your order to us once you’ve received it.
                </Typography>

                <Typography variant="h3">
                    Shipping and Delivery
                </Typography>

                <Typography variant="p">
                    We ship worldwide with free shipping within the USA!


                    We ship Monday through Friday, excluding select holidays. Once your order is processed and shipped out, we will notify you by email.

                    The following information is the estimated time frame you should receive your order after it has been shipped:
                    United States: 4 - 7 business days
                    International: 4 - 10 business days
                </Typography>

                <Typography variant="h3">
                    Duties and International Fees


                </Typography>

                <Typography variant="p">
                    Deliveries to countries outside the USA may incur duties, taxes, or charges that are not included in the total price displayed. To avoid unforeseen charges, we recommend contacting your local customs office for information on fees before placing your order.
                </Typography>

                <Typography variant="h3">
                    Data Protection



                </Typography>

                <Typography variant="p">
                    The owners and operators of this website take the protection of your data very seriously. We treat your data confidentially and according to the legal data protection regulations and this privacy policy.



                    The use of our website is usually possible without providing personal data. Personal data, such as your email addresses, is always provided to us voluntarily and only when you subscribe to our newsletter. Other personal data, including your name and address, is only required if you are ordering goods.



                    An external, PCI-compliant payment gateway (PayPal, Stripe) handles all credit card payment transactions.



                    Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential. Besides, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.



                    We implement a variety of security measures when a user places an order, and all transactions are processed through a gateway provider and are not stored or processed on our servers.
                </Typography>

                <Typography variant="h3">
                    Privacy Policy



                </Typography>

                <Typography variant="p">
                    The owners and operators of this website take the protection of your data very seriously. We treat your data confidentially and according to the legal data protection regulations and this privacy policy. Besides, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
                </Typography>

                <Typography variant="h3">
                    Cookies
                </Typography>

                <Typography variant="p">
                    This website partially uses cookies, small text files stored by your browser on your computer. Cookies do not cause damage to your computer and do not contain viruses. Cookies allow us to make our offer more user-friendly, more efficient, and more secure.



                    Most cookies that we use are so-called “session cookies,” which we will delete automatically after the end of your visit. Other cookies remain on your terminal device. Those cookies enable us to recognize your browser on your next visit.


                    We feel that the use of third-party services such as these improve your online experience because they allow you to see ads that will be more likely to be something you are interested in. If you want to opt-out from some cookies or tags that we collect, please visit these pages for more information:

                    www.google.com/ads/preferences
                    www.adroll.com/about/privacy#optpolicy
                    www.networkadvertising.org/choices

                    You can adjust your browser in such a way to allow cookies manually or to exclude cookies in general. In some cases, even to activate the automatic deletion of cookies when closing the browser.



                    The methods for doing so vary from browser to browser and from version to version. You can, however, obtain up-to-date information about blocking and deleting cookies via the support pages of the browser suppliers.
                </Typography>

                <Typography variant="h3">
                    Contact Form


                </Typography>

                <Typography variant="p">
                    If you send inquiries to us via the contact form, your data entered into the contact form, including the stated contact data, is stored for the purpose of dealing with your inquiry and in case of additional inquiries. That data will not be passed on without your permission.
                </Typography>

                <Typography variant="h3">
                    Newsletter
                </Typography>

                <Typography variant="p">
                    If you want to receive our newsletter, we simply need your email address. No other data is necessary. We use your address exclusively for sending the requested information and don't share it with any third parties.


                    Permission to store the email address, as well as the use of it for sending the newsletter, can be withdrawn at any time via the "Unsubscribe" link within the newsletter.
                </Typography>

                <Typography variant="h3">
                    Final Disclaimer


                </Typography>

                <Typography variant="p">
                    Although we take all kinds of security measures for the protection of personal information, we cannot guarantee complete protection. You provide all personal information at your own risk.
                </Typography>

            </Grid>

        </Grid>
    );
}

export default TermsAndConditions;
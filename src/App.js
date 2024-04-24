import Navbar from "./Components/navbar";
import Header from "./Components/header";

function App() {
  return (
    <>
   <Navbar/>
   <Header/>
    {/* <!-- Services--> */}
    <section className="page-section" id="services">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Need payments simplified? Pos is here to help!</h3>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">Online Store Integrations</h4>
                    <p className="text-muted">Integrate eCommerce and inventories seamlessly, providing automatic synchronization.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">Franchise Management</h4>
                    <p className="text-muted"> Our POS system will help you save time and improve the operation of your retail franchises. </p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">Merchant Services</h4>
                    <p className="text-muted"> With our automated system, you may enjoy smooth operations. Simply process payments, and we'll do the rest. </p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Portfolio Grid--> */}
    <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">FIELDS OF OPERATION</h2>
                {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 1--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Convenience Store</div>
                            <div className="portfolio-caption-subheading text-muted">Illustration</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 2--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Supermarkets</div>
                            <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 3--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Table service restaurant</div>
                            <div className="portfolio-caption-subheading text-muted">Identity</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    {/* <!-- Portfolio item 4--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Quick servic restaurant</div>
                            <div className="portfolio-caption-subheading text-muted">Branding</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    {/* <!-- Portfolio item 5--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Southwest</div>
                            <div className="portfolio-caption-subheading text-muted">Website Design</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    {/* <!-- Portfolio item 6--> */}
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
                        </a>
                        <div className="portfolio-caption">
                            <div className="portfolio-caption-heading">Window</div>
                            <div className="portfolio-caption-subheading text-muted">Photography</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Team--> */}
    <section className="page-section bg-light" id="team">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">YOUR ASSESTS</h2>
                <h3 className="section-subheading text-muted">Complete your transaction with ease using Pos.</h3>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/Support.jpg" alt="..." />
                        <h4>24x7</h4>
                        <p className="text-muted"> Remote Support</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/HWSetup.jpg" alt="..." />
                        <h4>Free </h4>
                        <p className="text-muted">Hardware and Setup</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/Money.jpg" alt="..." />
                        <h4>₹0</h4>
                        <p className="text-muted">Initiation Fees</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Spend less time on payments, more on growing your business with POS.</p></div>
            </div>
        </div>
    </section>
    {/* <!-- Clients--> */}
    <div className="py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
                </div>
                <div className="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact--> */}
    <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            {/* <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!--> */}
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* <!-- Name input--> */}
                            <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Email address input--> */}
                            <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <div className="form-group mb-md-0">
                            {/* <!-- Phone number input--> */}
                            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group form-group-textarea mb-md-0">
                            {/* <!-- Message input--> */}
                            <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Submit success message-->
                <!---->
                <!-- This is what your users will see when the form-->
                <!-- has successfully submitted--> */}
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center text-white mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                {/* <!-- Submit error message-->
                <!---->
                <!-- This is what your users will see when there is-->
                <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                {/* <!-- Submit Button--> */}
                <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
            </form>
        </div>
    </section>
    {/* <!-- Footer--> */}
    <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="col-lg-4 text-lg-end">
                    <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                    <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Portfolio Modals-->
    <!-- Portfolio item 1 modal popup--> */}
    <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Threads
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Illustration
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i className="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 2 modal popup--> */}
    <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Explore
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Graphic Design
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i className="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 3 modal popup--> */}
    <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Finish
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Identity
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i className="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 4 modal popup--> */}
    <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Lines
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Branding
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i className="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 5 modal popup--> */}
    <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Southwest
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Website Design
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i className="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 6 modal popup--> */}
    <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Window
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Photography
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i className="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default App;

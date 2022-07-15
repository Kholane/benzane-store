import "./footer.css";

export default function Footer(){
    return (
        <>
<section class="contact-section bg-black vh-100" id="contact">
    <div class="container px-lg-5">
      <div class="contact-info">
        <h3 class="text-center text-white display-4">Contact Information</h3>
        <ol class="text-white">
          <li class="address">3871 Mosonthane St, <br/> Boitekong, Rustenburg, 0300</li>
          <li class="phone"><a href="tel://1234567920">+27 73 891 3093</a></li>
          <li class="email"><a href="mailto:benelzanekholane@gmail.com">DimakatsoBenelzane@gmail.com</a></li>
        </ol>
      </div>
        <div class="social d-flex justify-content-center">
            <a class="mx-2" href="https://www.facebook.com/dimakatso.benelzane"><i class="bi bi-facebook"></i></a>
        </div>
    </div>
</section>
<footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Benzane 2022 all rights reserved</div></footer>
        </>
    )
}
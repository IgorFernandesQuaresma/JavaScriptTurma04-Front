const hamburguer = document.querySelector(".hamburguer");
const ulNav = document.querySelector(".header__nav__ul");
const seguidores = document.querySelector(".seguidores")
const seguindo = document.querySelector(".seguindo")
const linkBotaoGit = document.querySelector(".aboutMe__sobre__btn__link")
const linkFotoGit = document.querySelector(".aboutMe__img_link")

hamburguer.addEventListener("click", () => {
  ulNav.classList.toggle("active");
  console.log(ulNav);
});

async function apiGitHub() {
  try {

    // traz a resposta do link da api no formato que não é json
    const resposta = await fetch(
      "https://api.github.com/users/IgorFernandesQuaresma"
    );

    if (resposta.ok) {

      // se achar a resposta converte ela para Json, para utilizar
      const userInfo = await resposta.json();
      linkFotoGit.setAttribute("src", userInfo.avatar_url)
      linkBotaoGit.setAttribute("href", userInfo.html_url)
      seguidores.textContent =`${userInfo.followers} Seguidores`
      seguindo.textContent = `${userInfo.following} Seguindo`
      
    } 
    
    else {
      console.error("Erro!:", resposta.status);
    }
  } catch (error) {
    console.error("Não conseguimos conectar com a API:", error);
  }
}


apiGitHub()
<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/img/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
          loading="lazy"
        />
        MWP
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >Проекты</a>
            <ul class="dropdown-menu shadow-sm border-0" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">ATIOP</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">ENTR</a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">Контроль</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <div>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>-->
</template>
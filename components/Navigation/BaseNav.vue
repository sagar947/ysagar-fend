<template>
  <b-navbar toggleable="lg" type="dark" variant="transparent" sticky>
    <b-navbar-brand href="/">
      <b-img src="/img/Logo.png" width="32px" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">
          Home
        </b-nav-item>
        <b-nav-item href="/posts">
          Blog
        </b-nav-item>
        <b-nav-item href="/tutorials">
          Tutorials
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

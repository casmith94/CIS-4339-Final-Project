<template>
  <div>
    <!-- Navigation bar -->
    <nav class="navbar navbar-dark bg-danger justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">TechCrate Collectors</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/add">Sign-Up</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-2" to="/view">View Subscribers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/faq">FAQ</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<template>
  <div class="penduduk">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/profile">Profile</a></li>
      <li class="breadcrumb-item active">Penduduk</li>
    </ol>
    <ul class="nav nav-tabs text-center">
      <li class="nav-item col-6 p-0">
      <router-link class="nav-link" exact-active-class="active" :to="{ name: 'chartpenduduk' }">Grafik Penduduk</router-link>
      </li>
      <li class="nav-item col-6 p-0">
      <router-link class="nav-link" active-class="active" to="/datapenduduk">Table Penduduk</router-link>
      </li>
    </ul>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

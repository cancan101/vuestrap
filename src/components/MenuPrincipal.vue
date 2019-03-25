<template>
        <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
            <div class="container-fluid">

                <!-- Burger icon -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Logo -->
                <a class="navbar-brand" href="index.html">
                    <img src="@/assets/img/logo.svg" class="navbar-brand-img
            mx-auto" alt="...">
                </a>

                <!-- Icône utilisateur masqué sur écrans moyens : class d-md-none -->
                <div class="navbar-user d-md-none">

                    <!-- Dropdown -->
                    <div class="dropdown">

                        <!-- Toggle -->
                        <a href="#" id="sidebarIcon" class="dropdown-toggle" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <div class="avatar avatar-sm avatar-online">
                                <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle"
                                     alt="...">
                            </div>
                        </a>

                        <!-- Menu -->
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
                            <a href="profile-posts.html" class="dropdown-item">Profile</a>
                            <a href="settings.html" class="dropdown-item">Settings</a>
                            <hr class="dropdown-divider">
                            <a href="sign-in.html" class="dropdown-item">Logout</a>
                        </div>

                    </div>

                </div>

                <!-- Collapse -->
                <div class="collapse navbar-collapse" id="sidebarCollapse">

                    <!-- Form -->
                    <form class="mt-4 mb-3">
                        <div class="input-group input-group-rounded input-group-merge">
                            <input type="search" class="form-control form-control-rounded form-control-prepended"
                                   placeholder="Search" aria-label="Search">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <span class="fe fe-search"></span>
                                </div>
                            </div>
                        </div>
                    </form>

                    <!-- Navigation -->
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">
                                <i class="fe fe-home"></i>
                                Accueil
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"
                               href="#sidebarPages"
                               data-toggle="collapse"
                               role="button"
                               aria-expanded="false"
                               aria-controls="sidebarPages">
                                <i class="fe fe-file"></i>
                                Pages
                            </a>
                            <div class="collapse" id="sidebarPages">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link to="/form" class="nav-link">
                                            <i class="fe fe-home"></i>
                                            Formulaire
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/formrich" class="nav-link">
                                            <i class="fe fe-home"></i>
                                            Formulaire enrichit
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/about" class="nav-link">
                                            <i class="fe fe-home"></i>
                                            Accueil
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <!-- Divider -->
                    <hr class="navbar-divider my-3">

                    <!-- Heading -->
                    <h6 class="navbar-heading">
                        Documentation
                    </h6>

                    <!-- Navigation -->
                    <ul class="navbar-nav mb-md-4">
                        <li class="nav-item">
                            <a class="nav-link " href="getting-started.html">
                                <i class="fe fe-clipboard"></i> Getting started
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="changelog.html">
                                <i class="fe fe-git-branch"></i> Changelog <span
                                    class="badge badge-primary ml-auto">v1.3.2</span>
                            </a>
                        </li>
                    </ul>

                    <!-- Push content down -->
                    <div class="mt-auto"></div>


                    <!-- Customize -->
                    <a href="#modalDemo" class="btn btn-block btn-primary mb-4" data-toggle="modal">
                        <i class="fe fe-sliders mr-2"></i> Contacter le support
                    </a>

                    <!-- User (md) -->
                    <div class="navbar-user d-none d-md-flex" id="sidebarUser">

                        <!-- Icon -->
                        <a href="#sidebarModalActivity" class="navbar-user-link" data-toggle="modal">
                            <span class="icon">
                              <i class="fe fe-bell"></i>
                            </span>
                        </a>

                        <!-- Dropup -->
                        <div class="dropup">

                            <!-- Toggle -->
                            <a href="#" id="sidebarIconCopy" class="dropdown-toggle" role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                <div class="avatar avatar-sm avatar-online">
                                    <img src="@/assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle"
                                         alt="...">
                                </div>
                            </a>

                            <!-- Menu -->
                            <div class="dropdown-menu" aria-labelledby="sidebarIconCopy">
                                <a href="profile-posts.html" class="dropdown-item">Profile</a>
                                <a href="settings.html" class="dropdown-item">Settings</a>
                                <hr class="dropdown-divider">
                                <a href="sign-in.html" class="dropdown-item">Logout</a>
                            </div>

                        </div>

                        <!-- Icon -->
                        <a href="#sidebarModalSearch" class="navbar-user-link" data-toggle="modal">
                            <span class="icon">
                              <i class="fe fe-search"></i>
                            </span>
                        </a>

                    </div>


                </div> <!-- / .navbar-collapse -->

            </div>
        </nav>
</template>

<script>
    export default {
        name: 'MenuPrincipal',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

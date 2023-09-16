<script setup>
import { h } from "vue";
import { NIcon } from 'naive-ui'
import Logo from './Logo.vue'
import HeaderLinks from './HeaderLinks.vue'
import HeaderMenu from './HeaderMenu.vue'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";

const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};

let links = [
    {
        name: 'Аренда',
        href: '/rent/'
    },
    {
        name: 'Туры',
        href: '/tours/'
    },
    {
        name: 'Мероприятия',
        href: '/events/'
    }
]

let menuOption = [
{
          label: "Profile",
          key: "profile",
          icon: renderIcon(UserIcon)
        },
        {
          label: "Edit Profile",
          key: "editProfile",
          icon: renderIcon(EditIcon)
        },
        {
          label: "Logout",
          key: "logout",
          icon: renderIcon(LogoutIcon)
        }
]
</script>

<template>

<header>
    <div class="header">
        <div class="header__logo">
            <Logo/>
        </div>
        <div class="header__links">
            <HeaderLinks :links="links"/>
        </div>
        <div class="haeder__menu">
            <HeaderMenu :options="menuOption"/>
        </div>
    </div>
</header>

</template>

<style scoped>
header
{
    height: 90px;
}
.header
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
</style>

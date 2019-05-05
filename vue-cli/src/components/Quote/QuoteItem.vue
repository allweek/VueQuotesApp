<template>
    <li class="quote">
        <slot></slot>
    </li>
</template>

<style>
    .quote {
        display: inline-block;
        vertical-align: top;
        width: 22%;
        border: 1px solid lightgrey;
        padding: 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: black;
        font-style: italic;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-right: 4%;
        margin-bottom: 20px;
    }
    .quote:hover {
        background: pink;
    }
    .quote:nth-child(4n) {
        margin-right: 0;
    }
</style>
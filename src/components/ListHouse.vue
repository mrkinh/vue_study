<template>

<div id="srp-list" class="srp-list margin-top">

<ul v-if="houses && houses.length" class="srp-list-marginless list-unstyled ">

<li v-for="house of houses" :key="house.id" class="js-record-user-activity js-navigate-to srp-item js-save-alert-wrapper">

  <div class="aspect-content srp-item-photo-wrap">
      <div class="srp-item-photo" data-label="property-photo">

        <a href="/realestateandhomes-detail/726-Vasona-St_Milpitas_CA_95035_M14270-37564">
            <img alt="726 Vasona St, Milpitas, CA 95035" title="726 Vasona St, Milpitas, CA 95035" class="js-srp-listing-photos" :src="house.imageUrl">
        </a>
      </div>
  </div>

  <div class="srp-item-body">
    <div class="srp-item-label margin-bottom-sm">
      <div class="label-wrapper">
        <span class="label label-green" data-label="property-label-new">New</span>
      </div>
    </div>

    <div class="srp-item-price" data-label="property-price">
      <span class="data-price-display" itemprop="price" content="962888">{{house.price}}</span>
    </div>

    <div class="srp-item-address ellipsis">
      <a href="javascript:void(0);">
          <span class="listing-street-address">{{house.street}}</span>,
        <span class="listing-city">{{house.district}}</span>,
        <span class="listing-region">{{house.city}}</span>
        <span class="listing-postal">95035</span>
      </a>
    </div>

    <div class="srp-item-type srp-item-tags ellipsis hidden-xs-small hidden-xxs" data-label="property-type">
      <span class="srp-property-type">{{house.type}}</span>
    </div>

    <div class="srp-item-property-meta">
      <ul class="property-meta list-horizontal list-style-disc list-spaced">
          <li data-label="property-meta-beds"><span class="data-value meta-beds">{{house.numberOfBedRoom}}</span> Phòng Ngủ</li>
          <li data-label="property-meta-sqft"><span class="data-value">{{house.spare}}</span> m2</li>
          <li data-label="property-meta-garage"><span class="data-value">{{house.numberOfFloor}}</span> Lầu</li>
      </ul>
    </div>

    <div class="srp-item-ldp-link">
      <a href="javascript:void(0);" class="btn btn-default hidden-xs-small hidden-xxs">Xem chi tiết</a>
      <a href="javascript:void(0);" class="btn before-contact js-no-listing-click">
        Contact Agent
      </a>
      <a href="javascript:void(0);" class="btn btn-ghost-dark after-contact js-no-listing-click">
        Contacted
      </a>
    </div>
  </div>
</li>
</ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      houses: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created () {
    axios.get(`/static/example_data.json`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.houses = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.srp-list {
    position: relative;
}

.margin-top {
    margin-top: 10px;
}

.list-unstyled, .list-horizontal {
    padding-left: 0;
    list-style: none;
}

ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
}

.srp-item {
    overflow: hidden;
    position: relative;
    margin-bottom: 14px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #dcdcdc;
    -webkit-transition: all 50ms ease;
    -o-transition: all 50ms ease;
    -moz-transition: all 50ms ease;
    transition: all 50ms ease;
    border-radius: 0;
    height: 300px;
}
.srp-item:before, .srp-item:after {
    content: " ";
    display: table;
}

.list-unstyled, .list-horizontal {
    padding-left: 0;
    list-style: none;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

.srp-item-photo-wrap {
    text-align: center;
    height: 100%;
    position: absolute;
    overflow: hidden;
}

.margin-bottom-sm {
    margin-bottom: 5px;
}

.srp-item-label .label {
    display: inline-block;
}
.label-green {
    background-color: #57bb10;
    border-color: #57bb10;
}
.label {
    border: 1px solid transparent;
    font-size: 13px;
    padding: 3px 6px;
    border-radius: 0;
    font-weight: normal;
}
.label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
}

.srp-item-price {
    font-size: 20px;
    font-weight: 700;
}

.ellipsis {
    display: block;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.srp-item-address a {
    font-weight: 400;
    text-decoration: none;
    line-height: 1.5;
}

.srp-item-type {
    font-size: 12px;
    line-height: 1.5;
    color: #999;
}

.list-horizontal {
    display: table;
}

@media only screen and (min-width: 1280px){

.srp-item .srp-item-photo-wrap {
    width: 480px;
}

body:not(.srp-map-view) .srp-item-body {
    position: relative;
    padding: 25px 12px;
    height: 300px;
    line-height: 1.8;
}

.srp-item .srp-item-body, .srp-item .alert-save-notification {
    margin-left: 480px;
}

.label[data-label="property-label-open-house"] {
    background-color: #ebebeb;
    color: #333;
}

.srp-item-broker {
    display: none;
    font-size: 12px;
}
.srp-item-ldp-link {
    position: absolute;
    bottom: 0px;
    padding: 9px 12px;
    z-index: 2;
}
}

@media only screen and (min-width: 665px) {

body:not(.srp-map-view) .srp-item-property-meta {
    margin-top: 15px;
    text-align: center;
}

.srp-item-property-meta ul.property-meta li:first-child {
    border-left: 0;
}

.srp-item-property-meta ul.property-meta li {
    height: 50px;
    border-left: 1px solid #ccc;
    padding: 0 15px;
    margin: 0;
}

.list-horizontal >li {
    float: left;
    display: inline;
    margin-left: 5px;
}

}
</style>

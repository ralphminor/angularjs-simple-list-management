(function() {
  'use strict'
    angular.module("app", [])

      .component('itemList', {

        controller: function () {
          const vm = this

          vm.$onInit = onInit
          vm.addItem = addItem
          vm.deleteItem = deleteItem

          function onInit() {
            vm.items=[
              {name:"boat", quantity:1},
              {name:"car", quantity:2},
              {name:"hammer", quantity:1},
              {name:"phone", quantity:1},
            ];
          }

          function addItem() {
            if (vm.item) {
              vm.items.push(vm.item);
              delete vm.item;
            }
          }

          function deleteItem(e, item) {
            e.preventDefault()
            vm.items.splice(vm.items.indexOf(item), 1)
          }

        },
        template: `
          <form ng-submit="$ctrl.addItem()">
            <p>
              <label for="name">Name</label>
              <input type="text" id="name" ng-model="$ctrl.item.name"/>
            </p>
            <p>
              <label for="quantity">Quantity</label>
              <input type="text" id="quantity" ng-model="$ctrl.item.quantity"/>
            </p>
            <p>
              <button type="submit">Add Item</button>
            </p>
          </form>

          <div class="row">
            <div class="col-sm-1">Name</div>
            <div class="text-center col-sm-1">Quantity</div>
            <div class="text-center col-sm-1">Delete?</div>
          </div>
          <div ng-repeat="item in $ctrl.items">
            <div class="row">
              <div class="col-sm-1">{{$index + 1}}. {{ item.name }}</div>
              <div class="text-center col-sm-1">{{ item.quantity}}</div>
              <div class="text-center col-sm-1"><a href="#" ng-click="$ctrl.deleteItem($event, item)">❌</a></div>
            </div>
          </div>
        `
      })
}())
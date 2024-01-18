{{ outlet }}
- renders any route

ember generate route [route-name]
- ember has generators to create boilerblate code
- this creates:
  ```
  installing route
    create app/routes/scientists.js
    create app/templates/scientists.hbs
  updating router
    add route scientists
  installing route-test
    create tests/unit/routes/scientists-test.js
  ```
  - `template` to display when user visits `/scientists`
  - `Route` object that fetches model used by the template
  - `entry` to app's router (in app/router.js)
  - unit test for this route


ember generate component [component-name]
- create file in `component` and `test`
- can add the `-gc` flag to include a `.js` file as well (component class?)

ember build --environment=production
- build: package all assets of the app
- env flag creates an optimized bundle -> ready for upload to web host
- when done: all concated + minied assests will be found in /dist

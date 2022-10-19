# NgPermissions

## `NgPermissionsModule.forRoot()` static method

<br>

Import `NgPermissionsModule` in your root module (e.g `AppModule`) using `forRoot` static method and pass `PermissionsMap` as an argument where key is the module name and the value is user permissions inside that module.

```
imports: [
    NgPermissions.forRoot({
        module_1: {read: true, write: true, delete: true},
        module_2: {read: true, write: true, delete: false},
        module_3: {read: true, write: false, delete: false},
    })
]
```

<br><br><br>

## `NgPermissionsModule.forModule()` static method

<br>

Import `NgPermissionsModule` in your feature module using `forModule` static method. As an argument pass a string matching one of the keys from permissions map set by `forRoot` method.

This way you will bind current feature module to matching permissions from `PermissionsMap`

```
imports: [
    NgPermissions.forModule('module_1')
]
```

<br><br><br>

## `AccessLevel` Directive

<br>

Use `*accessLevel` directive on elements that should be presented or hidden depending on permissions. Indicate the level of permission user should have to see the element.

```
<button *accessLevel="write">Do Something</button>
```

<br><br><br>

## `AccessModule` Directive

<br>

Use `accessModule` directive to override module context defined by `NgPermissionsModule.forModule(...)` static method.

```
<div accessModule="module_2">
    <button *accessLevel="read">Open</button>
    <button *accessLevel="delete">Remove</button>
</div>
```

<br><br><br>

## `ReadAccess` Guard

<br>

Use `ReadAccessGuard` as a routing guard. For this you also need to specify `data` property of route configuration to indicate module.

It will make sure user cannot navigate to module where he doesn't have `read` access level.
```
{
    path: 'users',
    loadChildren: -----

    canLoad: [ReadAccessGuard],
    data: {module: 'module_1'},
}
```

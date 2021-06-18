# React / Nextjs
Installation nextjs project (`npx create-next-app --typescript`)
Structure next (Out of the box):
- pages: Routing
- public: static assets
- styles: (uncompiled) css
What we'll add:
- components: Components of the application
- store: Redux or ContextAPI

## Env variables
Each project will have an `.env` file, in this file you can store 'global' constants (enviroment). 
There are three sorts of .env files:
- .env
- .env.local - Local always overrides the other values
- .env.development
- .env.production
- .env.test
### Public env and Private env
There are two ways to decare env variables:
`NEXT_PUBLIC_{name}` or `{name}`, the difference between these two is the scope in which they are accesible. `NEXT_PUBLIC_{name}` is available througout the whole application. `{name}` is only available on the node server.

## Structure of the pages folder
The routing in pages is the main routing for a NextJs application. Each file here represents a route.
So `pages/index.ts` would be the root of the the project (`localhost:3000/`) and `pages/info.ts` would be /info (`localhost:3000/info`).
### Dynamic routing
Filenames for pages can also use `[]` surrounding an 'parameter'. So a file like `pages/product/[id].ts` would corrospond with all `localhost:3000/product/*` routes.
If you add another file, like `pages/product/all.ts`, this would have a higher priority in the routing. So it won't route to `pages/product/[id].ts` but to `pages/product/all.ts`.
The route parameter can be fetched using `context.query.id` in `getServerSideProps`:
```
export const getServerSideProps: GetServerSideProps = async (context) => {
    const param = context.query.id;
```
Or in the component itself:
```
    const router = useRouter()
    const { pid } = router.query
```
### API 'pages'
It's common to create an `pages/api` folder. In here you can add routes which return (for example) JSON data.

## Structure of the component folder
For example when building an webshop:
- Catalog
  - Category
  - Product
- Checkout
- Account
- Content
- UI
- Layout

When building a POP pages the product listing would be a component in the Catalog/Category folder, but the ProductTile component in this list would be `components/Catalog/Category/ProductTile.tsx`.
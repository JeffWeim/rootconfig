# React root-config

## What is this?

This is an example microfrontend repo demonstrating how to use [single-spa](https://single-spa.js.org). You can see the code running at https://root-config.onrender.com/.

## How does it work?

[Full article](https://single-spa.js.org/docs/recommended-setup)

This repository is a javascript project that creates a javascript bundle that is an in-browser javascript module (explanation on [youtube](https://www.youtube.com/watch?v=Jxqiu6pdMSU&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=2) / [bilibili](https://www.bilibili.com/video/av83498486/)). The currently deployed version of the in-browser module can be seen at https://root-config.onrender.com/importmap.json.

This project uses [React](https://reactjs.org) and was created with the [create-single-spa](https://single-spa.js.org/docs/create-single-spa) CLI. It uses webpack and babel.


## Local development

[Full documentation](https://single-spa.js.org/docs/recommended-setup#local-development)

Tutorial video: [youtube](https://www.youtube.com/watch?v=vjjcuIxqIzY&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=4) / [bilibili](https://www.bilibili.com/video/av83617789/)

```sh
git clone https://github.com/react-microfrontends/root-config.git
cd root-config
yarn install
yarn start
open http://localhost:9000
```

## Adapting for your organization

Feel free to fork and modify any files you would like when doing a proof of concept for your organization. When it's time to actually create / adapt your organization's projects, consider using [create-single-spa](https://single-spa.js.org/docs/create-single-spa) instead of forking this repository.

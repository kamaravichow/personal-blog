---
title: Build your own AI Image Generation App with 0$ in hand
date: '2023-02-12'
tags: ['Image Generation','Machine Learning','Stable Diffusion']
draft: false
summary: AI Image generation tools like Dall-E, Mid journey and Stable Diffusion are getting quite a hype these days. As an aspiring dev and a sheep who follows all kinds of trends, you might be interested in making your own app or a feature in your existing app that will generate images from text.
images: ["/static/img/thumb-ai-img-eng-12-02-2023.jpg"]
layout: PostLayout
---

AI Image generation tools like Dall-E, Mid journey and Stable Diffusion are getting quite a hype these days. As an aspiring dev and a sheep who follows all kinds of trends, you might be interested in making your own app or a feature in your existing app that will generate images from text.

In this guide, I will show you how to build an image generation service that you can publish to Google Play, AppStore, or just as a web app.

## **Before we continue,**

You don’t need deep technical knowledge to follow this guide but know at least a few basics about making apps using the flutter framework and working with REST APIs. If you’re ready let's get into it.

# **The Server**

## **Stable Diffusion AI Server — Dream AI (Let’s just call it that)**

Deploying an image-generating AI model requires a GPU server instance which is super costly.

So, I searched for services that offer a free tier for hosting stable diffusion models and came across this site called [lightningAI](https://lightning.ai/) (creator of [pytorchLighting](https://github.com/Lightning-AI/lightning)).

They offer a stable diffusion hosting service which has a free tier that can support you until you release and earn some $$$ from your app.

Start by creating a new account for yourself at [https://lightning.ai/sign-up](https://lightning.ai/sign-up)

![](/static/img/boaigaw0ih-1.png)

By signing up for a free account you will get 3 credits for free every month which should be able to handle a light load from your initial app traffic.

Once you’re done through the sign-up process (It didn’t ask me for the payment information for now) you should see a dashboard that looks something like this.

![](/static/img/boaigaw0ih-2.png)

[Lightning.ai](http://Lightning.ai) dashboard

Start by clicking on the **new app** button on the top right of your dashboard.

![img](/static/img/boaigaw0ih-3.png)

Select the **Programmatic API model** option, it’s a preset all the coding is done by the lightning team, you don’t need to configure anything.

Deploy it for free and wait until the status turns green and says live.

![](/static/img/boaigaw0ih-4.png )

Click on **Open App** to see your deployed API endpoint.

You should see something like this

![](/static/img/boaigaw0ih-5.png)

We’ll use this in our app to make requests to the API.

# **The App**

[Flutter](https://flutter.dev/) Frontend app, as it’s easy to run on desktop, web and mobile.

We’ll use [dio](https://pub.dev/packages/dio) for making the HTTP requests

```plaintext
import 'package:dio/dio.dart';

class ApiService {
  final Dio dio = Dio(); // dio instance

  Future<Response> getImage() async {
    try {
      Response response = await dio.post("YOUR_URL", // use your server URL here
      data: {
            "text" : "Here the text you want to send"
       });
      return response;
    } catch (e) {
      print(e); // error handling
    }
  }
}
```

And from the response we get from the request, the image will be BASE64 encoded.

We need to convert that to the normal image before we can show it to the end user.

Make an ImageConverter class

```plaintext
import 'dart:convert';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class ImageConverter {
  static Widget base64(String base64String) {
    Uint8List imageBytes = base64Decode(base64String);
    return Image.memory(imageBytes);
  }
}
```

Now we can use the converted image in the widget tree like this :

```plaintext
....
Container(child: ImageConverter.base64("your-base64-encoded-image"));
```

That’s how you can make an AI image generation app for free.

Hope you liked reading this article, make sure you subscribe for newsletter if you did so you don't miss my next articles.
If you have any trouble following along, leave a comment below.



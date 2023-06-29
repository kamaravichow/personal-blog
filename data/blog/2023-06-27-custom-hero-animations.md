---
title: Making Your Flutter App Shine With Custom Hero Animations
date: '2023-06-27'
tags: ['Flutter', 'Dart']
draft: false
summary: Discover the magic of custom Hero animations in Flutter with our fun and easy-to-follow guide. Learn to enhance user experience and elevate your Flutter app's interactivity with this detailed tutorial on implementing and customizing Hero animations. 
images: []
layout: PostLayout
---

Hello Flutter enthusiasts! Today, let's dive into the world of animations and discover how to build custom Hero animations. Flutter, being an incredibly versatile framework, allows us to easily implement beautiful and interactive animations that can significantly enhance the user experience. So, let's unleash our creativity and make our Flutter apps even more engaging!

## What Are Hero Animations?

Before we start creating your hero animation, let's quickly understand what it actually signifies. In Flutter, the "Hero" widget allows for sleek and smooth animations between different screens of your app. It works by simply transitioning a widget from one route to another, giving you that delightful effect when you jump across different screens.

A typical example would be clicking on an image in a list, and the image smoothly enlarging and transitioning into a detailed view. This isn't just neat, it's 'heroic'!

## Step 1: Setting Up

To kick things off, let's create the two screens you'd like to transition between. Let's call the first screen 'HeroesScreen', and the second one 'HeroDetailScreen'. 

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Hero Animation',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HeroesScreen(),
    );
  }
}

class HeroesScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Heroes Screen'),
      ),
      body: Center(child: Text('Heroes Screen')),
    );
  }
}

class HeroDetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Hero Detail Screen'),
      ),
      body: Center(child: Text('Hero Detail Screen')),
    );
  }
}
```

## Step 2: Creating A Hero Widget

Now that our screens are set up, let's add a hero to the 'HeroesScreen'. In Flutter, any widget can become a hero! In this case, let's just make a colored container our hero. To do this, we simply wrap the container in a 'Hero' widget.

```dart
class HeroesScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Heroes Screen'),
      ),
      body: Center(
        child: Hero(
          tag: 'hero1',
          child: Container(
            height: 50.0,
            width: 50.0,
            color: Colors.red,
          ),
        ),
      ),
    );
  }
}
```
The 'Hero' widget takes a 'tag' parameter, which is a unique identifier that will be used to match this Hero with its corresponding Hero in the destination screen.

## Step 3: Adding A Hero To The Destination Screen

Since we've added a hero to the 'HeroesScreen', we need to add a counterpart in the 'HeroDetailScreen'. The two heroes are linked by their tag, so ensure that the Hero in 'HeroDetailScreen' has the same tag.

```dart
class HeroDetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Hero Detail Screen'),
      ),
      body: Center(
        child: Hero(
          tag: 'hero1',
          child: Container(
            height: 200.0,
            width: 200.0,
            color: Colors.red,
          ),
        ),
      ),
    );
  }
}
```

## Step 4: Transitioning Between Screens

Ok, we're all set. Now let's make the magic happen! We'll add a simple gesture so that when you tap on the hero in the 'HeroesScreen', it'll take you to the 'HeroDetailScreen'.

```dart
class HeroesScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Heroes Screen'),
      ),
      body: Center(
        child: Hero(
          tag: 'hero1',
          child: GestureDetector(
            child: Container(
              height: 50.0,
              width: 50.0,
              color: Colors.red,
            ),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder: (_) {
                return HeroDetailScreen();
              }));
            },
          ),
        ),
      ),
    );
  }
}
```

Run your app, and tap the red box. Tada! You should see the 'Hero' animation in action. The red box smoothly expands as you transition to the 'HeroDetailScreen'.

This is just

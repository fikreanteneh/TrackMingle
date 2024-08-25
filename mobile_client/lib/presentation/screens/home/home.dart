import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int currentIndex = 0;

  void onChangeNavigation(int index) {
    setState(() {
      currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: currentIndex,
        onTap: onChangeNavigation,
        items: [
          navigationItems("Home", const Icon(Icons.home)),
          navigationItems("Profile", const Icon(Icons.person)),
        ],
      ),
      body: Container(
        child: const Text("Home"),
      ),
    );
  }

  BottomNavigationBarItem navigationItems(String text, Icon icon) {
    return BottomNavigationBarItem(
      icon: icon,
      label: text,
    );
  }
}

- it is a structural design pattern, whenever you see a tree like structure , you can use this composite design pattern
- in the file system problem , where we need to design a , directory and file using composite pattern
<img width="442" height="372" alt="image" src="https://github.com/user-attachments/assets/97db7856-1703-4717-bab5-18dcffc4458e" />

- first we need to create an interface that will be common to both the classes for leaf and composite class
-  in file system , file can be understood as leaf and Directory which can have n number files and directory inside it
-  hence we have added an add function to add directory or file inside class

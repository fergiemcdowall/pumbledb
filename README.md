#Pumble

Pumble is a simple and powerful NOSQL database written for Node.js using LevelDB.

##Installation

    git clone https://github.com/fergiemcdowall/pumble.git
    cd pumble
    npm install

##Usage

**Putting**

    http://localhost:3000/put?key=name&value=John%20F.%20Kennedy

**Getting**

    http://localhost:3000/get?key=name

**Deleting**

    http://localhost:3000/delete?key=name
    
##Strenths
*  **Platform independent**: HTTP in-out. Can be called from anything, anywhere.
*  **Content agnostic**: Feed Pumble JSON, XML, Blob, LaTeX, something else, or any mixture thereof. Pumble indexes everything.
*  **Persistant**: If you turn your server off and on again your data is still there
*  **Economical**: Works well on low-powered server instances, because index is stored on disk (not memory) and large values are compressed with Snappy
*  **Fast**: LevelDB levels of performance.
*  **Robust**: not much to do, not much to go wrong
*  **Limited feature set**: you can peristently put, get and delete. Thats it. No trade offs.

##Weaknesses
*  Single node only
*  Not quite as blazing fast as in memory systems (although much more bang for buck, and probably fast enough)
*  Currently only accepting HTTP GET requests- the limits the size of the Value

##Future releases
*  Support for POSTing larger Values
*  Sharding

##License
Copyright 2013 Fergus McDowall

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

##Contact
Follow/contact me on Twitter [@fergiemcdowall](https://twitter.com/fergiemcdowall)

I write articles about search engine technology here: http://blog.comperiosearch.com/blog/author/fmcdowall/


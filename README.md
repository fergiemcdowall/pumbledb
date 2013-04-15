#PumbleDB

PumbleDB is a NOSQL Key-Value server written in Node.js.

PumbleDB allows you to get, put and delete Key-Value pairs over HTTP. It stores these values in a fast, persistant datastore on the server. PumbleDB uses [LevelUP](https://github.com/rvagg/node-levelup/).

**PumbleDB Homepage:** http://fergiemcdowall.github.io/PumbleDB/

**PumbleDB on GitHub:** https://github.com/fergiemcdowall/PumbleDB/

##Installation

    git clone https://github.com/fergiemcdowall/pumble.git
    cd pumble
    npm install
    
Note: Installation on Windows is currently non-trivial, see: https://github.com/rvagg/node-levelup/blob/master/README.md#platforms 

##Usage

###Putting

Insert simple key-value pair on any browser via GET

    http://localhost:3000/put?key=name&value=John%20F.%20Kennedy

Insert binary file with cURL via POST, use filename as key

    curl --form value=@image.png localhost:3000/postputfile
    
Insert binary file with cURL via POST and specify key

    curl --form value=@image.png --form key=mycoolimage localhost:3000/postputfile

###Getting

Get a simple text value

    http://localhost:3000/get?key=name
    
Get a file and guess the content type from its key

    http://localhost:3000/get?key=name
    
Get a file and specify the content type (some Content-Types can be found here http://webdesign.about.com/od/multimedia/a/mime-types-by-content-type.htm)

    http://localhost:3000/get?key=name&Content-Type=image/png

###Deleting

    http://localhost:3000/delete?key=name
    
##Strengths
*  **Platform independent**: HTTP in-out. Can be called from anything, anywhere.
*  **Content agnostic**: Feed Pumble JSON, XML, Blob, LaTeX, something else, or any mixture thereof. Pumble indexes everything.
*  **Persistant**: If you turn your server off and on again your data is still there
*  **Economical**: Works well on low-powered server instances, because index is stored on disk (not memory) and large values are compressed with Snappy
*  **Fast**: LevelDB levels of performance.
*  **Robust**: not much to do, not much to go wrong
*  **Limited feature set**: you can peristently put, get and delete. Thats it. No trade offs.

##Weaknesses
*  Single node only
*  Not quite as blazing fast as in memory systems

##Future releases
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


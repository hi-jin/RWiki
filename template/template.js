module.exports = {
html: (title, pageName, contents) => {

function getContents(data) {
result = '';
if (data.length == 0) {
return '';
}
for (var i = 0; i < data.length; i++) { result +=` <li class="nav-item">
    <a class="nav-link" aria-current="page" onclick="loadContent('${data[i].body}')">${data[i].title}</a>
    </li>
    `
    }

    return result;
    }

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="/style/style.css">
        <title>${title}</title>
    </head>

    <body>
        <header>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">러지위키</a>
                    <div style='display: flex; flex-direction: row;'>
                        <input id='searchDocName' class="form-control me-2" type="search" placeholder="인물 혹은 사건 검색"
                            aria-label="Search">
                        <button class="btn btn-outline-success" onclick="searchDoc()">Search</button>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <button type="button" class="btn btn-secondary btn-sm"
                onclick="window.location = '/addTab?title=${title}&pageName=${pageName}'">탭 추가</button>
            <ul class="nav nav-tabs">
                ${getContents(contents)}
            </ul>
            <div class='content-box'>

            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
        <script>
            function searchDoc() {
                let docName = document.getElementById('searchDocName').value;
                document.getElementById('searchDocName').value = '';
                window.location = '/findDoc/' + docName;
            }

            function loadContent(contentBody) {
                var links = document.getElementsByClassName('nav-link');
                for (var i = 0; i < links.length; i++) {
                    links[i].setAttribute('class', 'nav-link');
                }
                event.target.setAttribute('class', "nav-link active");
                document.getElementsByClassName('content-box')[0].innerHTML = contentBody;
            }
        </script>
    </body>

    </html>`
    }
    }
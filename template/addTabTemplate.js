module.exports = {
html: (title, pageName) => {
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
    <title>${title} 탭 추가</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">러지위키</a>
            </div>
        </nav>
    </header>
    <main style='align-items: center;'>
        <br><br>
        <form style='width: 60%; display: flex; flex-direction: column; align-items: center;' method='POST' action="/docs/${pageName}">
            <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">탭 제목</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" name='title'>
            </div>
            <br>
            <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">설명</span>
                <input type="text" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" style='height: 100px;' name='body'>
            </div>
            <br>
            <button class="btn btn-outline-success" type="submit">탭 추가하기</button>
        </form>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    <script>
    </script>
</body>

</html>`
}
}
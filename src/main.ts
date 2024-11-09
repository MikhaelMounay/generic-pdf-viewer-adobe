import "./assets/styles/index.css";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pdfFileURL = urlParams.get("file");
const pdfFileTitle = urlParams.get("title");

const pdfViewerIframe = document.getElementById("pdfvieweriframe") as HTMLIFrameElement;

if (pdfFileURL) {
    pdfViewerIframe.src =
        `https://betalms-pdfviewer-hbyn.netlify.app/?file=${pdfFileURL}` + (pdfFileTitle ? `&title=${pdfFileTitle}` : "");
    pdfViewerIframe.classList.add("fullscreen");
} else {
    document.getElementById("error-container")!.innerText =
        "Error 404: File not found! Please provide a valid PDF file URL in the query parameter 'file'.";
    pdfViewerIframe.classList.remove("fullscreen");
}

if (pdfFileTitle) {
    document.title = `${pdfFileTitle} | PDF Viewer`;
}

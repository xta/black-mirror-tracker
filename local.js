var episodes = ["no1", "no2", "no3", "no4", "no5", "no6", "no7", "no8", "no9", "no10",
                "no11", "no12", "no13", "no14", "no15", "no16", "no17", "no18", "no19",
                "no20", "no21", "no22", "no23"];

function itemToggle() {
    var el = event.srcElement;
    var id = el.id;

    var hasSeen = el.classList.contains("seen")
    if (hasSeen) {
        localStorage.removeItem(id);
    } else {
        localStorage.setItem(id, "seen");
    }

    el.classList.toggle("seen");
}

function restoreState() {
    for (var i=0; i < episodes.length; i++) {
        var episode_id = episodes[i];
        var el = document.getElementById(episode_id);
        var episodeStatus = localStorage.getItem(episode_id);

        if (episodeStatus === "seen") {
            el.classList.add("seen");
        }
    }
}

restoreState();

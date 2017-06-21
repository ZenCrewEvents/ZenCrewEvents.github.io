function toggleMute()
{
	var backgroundAudio = document.getElementById('bAudio');
    if (backgroundAudio.volume == 1) {
		backgroundAudio.volume = 0;
	}
    else {
		backgroundAudio.volume = 1;
	}
}

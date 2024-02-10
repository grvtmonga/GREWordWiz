# from gtts import gTTS
# import os
# speech= gTTS('I find it difficult to belie that he would say such a thing.', slow=False)
#
# speech.save('Welcome.mp3')
#
# # os.system('start Welcome.mp3')
#
# from playsound import playsound
# playsound("Welcome.mp3")

import pyttsx3
voice_id = "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0"
audio = pyttsx3.init()
audio.setProperty("rate", 165)
audio.setProperty("volume", 0.7)
audio.setProperty('voice', voice_id)
audio.say('I find it difficult to belie that he would say such a thing.')
audio.runAndWait()

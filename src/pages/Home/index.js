import React from 'react';
import styles from '../../global.module.scss'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Home() {
return(
  <>
  <br/>
  <br/>
  <br/>
  <br/>
        <div style={{ display: 'flex', justifyContent: 'center' , marginLeft: '3rem' , marginRight: '3rem' , height: '580px'}}>
            <div style={{ width: '450px'}}>
              <TwitterTimelineEmbed
                sourceType="profile"
                tweetLimit={1}
                screenName="georgelucasdev"
                options={{ theme: 'dark' }}
                style={{ width: '480px', height: '450px' }}
              />
            </div>
            <div style={{marginLeft: '3rem' , marginRight: '3rem'}}>
              <iframe
                title="Postagem do Instagram"
                srcDoc='<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/georgelucasdev/" data-instgrm-version="13"></blockquote> <script async src="//www.instagram.com/embed.js"></script>'
                width="340"
                height="450"
                allowtransparency="true"
              >
              </iframe>
            </div>
          </div>
  </>
 );
}
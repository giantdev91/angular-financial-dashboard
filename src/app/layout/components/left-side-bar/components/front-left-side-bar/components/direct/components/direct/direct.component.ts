import { Component, OnInit } from '@angular/core';
import { ContactCard } from '../../models/contact-card.model';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss']
})
export class DirectComponent implements OnInit {

  contacts: ContactCard[] = [
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: true,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: true,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:31',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: true,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: true,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:31',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: true,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: true,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:31',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: true,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: true,
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:31',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 2,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 1,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 5,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 4,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 3,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 1,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 5,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 4,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 3,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 1,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 5,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 4,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 3,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 1,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 5,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 4,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
    {
      Messages: [
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        },
        {
          message: 'Are we Meeting Today? Waiting for your response',
          time: '2:30',
          received: false
        }
      ],
      Name: 'Andrea Ismail',
      NewMessages: 3,
      photoURL: 'https://source.unsplash.com/7YVZYZeITc8/30x30'
    },
  ];

  message!: ContactCard;
  photoURL!: string;
  showChat: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    this.showChat = false;
  }

  ShowChat(message: ContactCard): void {
    this.photoURL = message.photoURL;
    this.message = message;
    this.showChat = true;
  }
}

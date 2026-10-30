## Data Communication and Networking

Backlog End-Term Preparation Pack (MIT-WPU, SY BSc CS, Sem IV)

Contents: Step 1 paper classification | Step 2 end-term pattern analysis | Step 3 ranked priorities | Step 4 predicted paper | Step 5 exam-ready answers | Step 6 simple explanations | Step 7 strategy and revision plan | Appendix: backup notes

Read this first. Everything below is a prediction built from only two end-term papers (May/June 2023 and May-June 2026). Two papers is a small sample: repetition raises the odds, it never guarantees a question. The predicted paper is NOT official. Where something in your photo was blurry or cut off, it is marked as unverified instead of guessed.

## STEP 1 - Paper classification

| Paper (position in | Type | What I could read | Counted as |
| --- | --- | --- | --- |
| photo) |   |   |   |
| Top-left | End-term, May/June | BSC2PM04A, Sem IV, SYBSc-CS. 7 questions, | END-TERM |
|   | 2023 | answer any 3, mostly 8 marks each. Ends with 'END | (primary) |
|   |   | OF QUESTION PAPER' after Q7, so it looks like a |   |
|   |   | single-section paper. |   |
| Top-right | End-term, May-June | Same course (code list cut off at the edge). Section I: | END-TERM |
|   | 2026 | 7 questions, answer any 3, 8 marks each. | (primary, most |
|   |   |   | recent) |
| Bottom-left | Mid-term, March 2026 | BSC20070, 30 marks, 1 hour. Section I compulsory | Supplementary only |
|   |   | (5+5), Section II answer any 2 (10 marks each). |   |
| Bottom-right | Not labelled | Only a Section II page: topologies, routing vs | Supplementary only |
|   |   | switching, IP addressing/IPv4 vs IPv6, 10 marks | (see note) |
|   |   | each, answer any 2. Handwritten '218' at the top. |   |

Why the bottom-right page is left out of the end-term analysis: its format (10 marks, answer any 2, Section II) matches the mid-term Section II, not the two end-terms (8 marks, answer any 3). It has no end-term header. Its question numbers (2, 3, 4) also do not fit as page 2 of the March mid-term, so it may be another mid-term set. Without a header I cannot prove what it is, so I treat it as syllabus coverage only, never as evidence for the end-term.

## Things I could not verify (so I did not rely on them):

- \- 2023 paper: printed date says 2023 but a handwritten '24/5/25' sits at the top. Max marks and duration are blurry.

- \- 2026 paper: right edge is cropped, so total marks, duration and any Section II are not visible.

- \- Exact bit strings in both line-coding questions and the 2023 checksum are too blurry to read reliably, so my predicted numericals use fresh numbers.

- \- I am assuming a single section of 7 questions (answer any 3 x 8 = 24 marks), because that is what both end-term pages show.

## STEP 2 - End-term pattern analysis (2023 vs 2026)

Both end-term papers have the same shape: 7 questions, attempt any 3, 8 marks each. Because you choose 3 of 7, you do not need to cover everything: you need three strong questions. Questions often have an (a)/(b) split, e.g. 6+2 or 5+3.

| Topic | 2023 end-term | 2026 end-term | Verdict |
| --- | --- | --- | --- |
| OSI vs TCP/IP | Q1: Differentiate OSI and TCP/IP | Q2: Draw OSI + layer functions (6); | EXACT repeat (differentiate |
|   | (8) | differentiate OSI vs TCP/IP (2) | OSI vs TCP/IP) |
| Line coding | Q3: convert bit stream: Polar | Q3: convert bit stream: AMI, 2B1Q, | Same question type, |
| numerical | NRZ-I, Bipolar NRZ, Unipolar | MLT-3, Unipolar, NRZ-L, NRZ-I, | different list. Overlap: |
|   | NRZ, 2B1Q, MLT-3 (8) | Manchester, Polar RZ (8) | MLT-3, 2B1Q, Unipolar, |
|   |   |   | NRZ-I |
| Transmission media Q2: Draw chart of media, explain |   | Q1b: Note on guided media (3, | Same topic, different depth |
|   | all types (8) | with Q1a types of signals 5) |   |


| Topic | 2023 end-term | 2026 end-term | Verdict |
| --- | --- | --- | --- |
| Multiple access | Q5: What is CSMA; 1-persistent, | Q5: Classify multiple access; | Same topic, different |
|   | non-persistent (8) | Slotted ALOHA (8) | protocol |
| Application layer | Q7: FTP in detail (8) | Q7: Purpose of DNS, discuss in | Same slot (Q7), different |
|   |   | detail (8) | protocol |
| Data link: error/flow | Q4: Byte stuffing + 4 examples | Q4: Go-Back-N ARQ with diagram | Data link appears in both, |
| control | (8). Q6: checksum (4 segments of | (6) + piggybacking (2) | but specific item changes |
|   | 8 bits) + CRC with x^4+x+1 (8) |   |   |
| Transport layer | - | Q6: TCP vs UDP (4) + | Appears once |
|   |   | process-to-process delivery (4) |   |

## Observations (evidence, not guesses):

- \- Slot pattern: Q1/Q2 = fundamentals (models, media, signals), Q3 = line coding numerical, Q4 = data link, Q5 = multiple access, Q7 = application layer. This slot order held in both papers.

- \- Only one exact question repeated word-for-word in spirit: OSI vs TCP/IP. Everything else repeated as a topic with a changed item.

- \- Neither end-term asks network-layer topics (IP addressing, routing, topologies, packet switching). Those appear only in the mid-term / unlabelled page, so they are low priority for the end-term.

- \- 2026 is the most recent, so I weight it slightly higher. Sample size is two, so treat the ranking as odds, not certainty.

## STEP 3 - Ranked prediction

## HIGH PRIORITY (appeared in both end-terms)

| # | Topic | Evidence | Type of prediction |
| --- | --- | --- | --- |
| 1 | Line coding numerical (NRZ-L, | Q3 in both papers, 8 marks. | Question type repeated; exact bit string |
|   | NRZ-I, RZ, Manchester, AMI, | Overlapping schemes: MLT-3, 2B1Q, | and scheme list will change. Highest |
|   | MLT-3, 2B1Q, Unipolar) | Unipolar, NRZ-I. | scoring-per-effort. |
| 2 | OSI model, layer functions, OSI vs | OSI vs TCP/IP in both. 2026 also asked | Exact repeat of the comparison; layer |
|   | TCP/IP | draw OSI + functions. | functions likely |
| 3 | Transmission media (guided: | 2023 Q2 (all types) and 2026 Q1b | Topic repeated |
|   | twisted pair, coaxial, fibre; | (guided). |   |
|   | unguided) |   |   |
| 4 | Multiple access: Slotted ALOHA, | CSMA (2023), Slotted ALOHA (2026). Topic repeated, protocol varies. Prepare |   |
|   | CSMA 1-/non-/p-persistent |   | both. |
| 5 | Application layer: DNS and FTP | FTP (2023), DNS (2026), both in Q7. | Topic repeated, protocol varies. Prepare |
|   |   |   | both (they are short). |

## MEDIUM PRIORITY (appeared once in end-term, still core syllabus)

| Topic | Evidence | Why medium |
| --- | --- | --- |
| Checksum + CRC numericals | 2023 Q6 only (checksum, 4 segments x 8 | Numerical error-detection is a standard |
|   | bits; CRC with x^4+x+1). | data-link item; absent in 2026 but easy |
|   |   | marks if it comes. |
| Go-Back-N ARQ (and | 2026 Q4 only (diagram, 6 marks). | Most recent paper; flow control is the likely |
| Stop-and-Wait / Selective |   | 2026-style data-link item. |
| Repeat) |   |   |
| Framing: byte (character) | 2023 Q4 only (with 4 examples). | Data link appears in both papers; framing is |
| stuffing, bit stuffing |   | a short, safe topic. |
| TCP vs UDP, | 2026 Q6 only. | Transport layer appeared once; low effort to |
| process-to-process delivery |   | revise. |


## LOW PRIORITY (thin evidence; revise only if time remains)

| Topic | Evidence | Note |
| --- | --- | --- |
| Types of signals (analog/digital, | 2026 Q1a only (5 marks). | Short theory; 20-minute read. |
| periodic/aperiodic) |   |   |
| Piggybacking | 2026 Q4b only (2 marks). | Two-line answer; included in Appendix. |
| Network layer: IP addressing, IPv4 vs | Not in either end-term. Only in | Mid-term repetition is NOT end-term |
| IPv6, routing vs switching, topologies, | mid-term/unlabelled page. | evidence. Skim only. |
| packet switching |   |   |

## STEP 4 - Predicted end-term paper (PREDICTION ONLY)

Label: This is a predicted practice paper, not an official or guaranteed paper. Assumptions: single section, 7 questions, answer any 3, 8 marks each (24 marks), (a)/(b) splits as seen in 2023/2026. Numbers in numericals are mine, not copied from any past paper.

## Term End Examination (Predicted) - Data Communication and Networking

Section I: Answer any 3 questions. Each question carries 8 marks.

| Q Question |   | Marks Basis |   |
| --- | --- | --- | --- |
| 1 | Draw the OSI reference model and explain the functions of each layer (6). | 8 | Exact-repeat topic (both) |
|   | Differentiate between the OSI model and the TCP/IP model (2). |   |   |
| 2 | Draw a chart of transmission media. Explain guided transmission media (twisted | 8 | Topic repeated (both) |
|   | pair, coaxial, optical fibre) in detail (6). Write a short note on unguided media (2). |   |   |
| 3 | What is line coding? Convert the data 10110010 into a digital signal using: (a) | 8 | Question type repeated |
|   | Unipolar NRZ (b) Polar NRZ-L (c) Polar NRZ-I (d) Polar RZ (e) Manchester (f) |   | (both) |
|   | Bipolar AMI (g) MLT-3 (h) 2B1Q. |   |   |
| 4 | (a) Explain Go-Back-N ARQ with a proper diagram (5). (b) Explain byte | 8 | 2026 Q4 + 2023 Q4 |
|   | (character) stuffing with examples (3). |   | topics |
| 5 | (a) The data 10011001 11100010 00110100 10010101 (4 segments of 8 bits) is | 8 | 2023 Q6 topic |
|   | to be sent. Calculate the checksum (4). (b) Find the CRC for data 100110101 |   |   |
|   | using generator x4 + x + 1, and write the transmitted bit string (4). |   |   |
| 6 | (a) Classify multiple access protocols and explain Slotted ALOHA (4). (b) What is | 8 | Topic repeated (both) |
|   | CSMA? Explain 1-persistent and non-persistent CSMA (4). |   |   |
| 7 | Explain the Domain Name System (DNS) in detail. OR Explain File Transfer | 8 | Topic repeated (both) |
|   | Protocol (FTP) in detail. |   |   |

Not placed in the paper but still worth a quick read (see Appendix): TCP vs UDP, process-to-process delivery, types of signals, piggybacking.


## STEP 5 - Exam-ready answers (write these in the exam)

## Answer 1: OSI model and OSI vs TCP/IP (8 marks)

Definition: The OSI (Open Systems Interconnection) reference model was developed by ISO. It divides network communication into 7 layers, each with a specific job, so that different systems can communicate.

## Functions of each layer (top to bottom):

| Layer | Main functions | Unit |
| --- | --- | --- |
| 7 Application | Gives the user access to the network: e-mail, file transfer, web, directory services (HTTP, | Data |
|   | FTP, SMTP, DNS). |   |
| 6 Presentation | Translation (different data formats), encryption/decryption, compression. | Data |
| 5 Session | Opens, manages and closes sessions; dialog control; synchronization using checkpoints. Data |   |
| 4 Transport | Process-to-process (end-to-end) delivery; port addressing; segmentation and reassembly; | Segment |
|   | connection control; end-to-end flow and error control. |   |
| 3 Network | Logical (IP) addressing; routing; packet forwarding; source-to-destination delivery. | Packet |
| 2 Data Link | Framing; physical (MAC) addressing; flow control; error control; access control. | Frame |
|   | Hop-to-hop delivery. |   |
| 1 Physical | Transmits raw bits; defines voltages, data rate, cables, topology and transmission mode | Bits |
|   | (simplex, half-duplex, full-duplex). |   |

## Difference between OSI and TCP/IP:

| Point | OSI model | TCP/IP model |
| --- | --- | --- |
| Layers | 7 layers | 4 layers (Application, Transport, Internet, |
|   |   | Network Access) |
| Developed by | ISO | DARPA / US Department of Defense |
| Nature | Generic reference model; protocols fit the | Protocol suite that was built first; model |
|   | model | describes it |
| Session and | Separate layers | Merged into the Application layer |
| presentation |   |   |
| Network layer service | Connectionless and connection-oriented | Connectionless only (IP) |
| Transport layer service | Connection-oriented only (as per the model) | Both: TCP (connection-oriented) and UDP |
|   |   | (connectionless) |
| Use | Mostly for teaching and reference | Used in the real Internet |

Conclusion: OSI explains the concepts clearly; TCP/IP is what the Internet actually runs on.


## Answer 2: Transmission media (8 marks)

Definition: A transmission medium is the physical path between sender and receiver through which data travels as signals.

- A. Guided (wired) media - the signal travels along a physical cable.

- 1. Twisted pair: two insulated copper wires twisted together; twisting cancels interference and reduces crosstalk.

- \- UTP (unshielded): cheap, easy to install; used in telephone lines and LANs (Cat 5/5e/6, about 100 m per segment).

- \- STP (shielded): has a metal foil/braid shield, so less noise, but costlier and bulkier.

- \- Disadvantages: limited bandwidth and distance, affected by noise.

- 2. Coaxial cable: central copper conductor, insulating layer, outer braided conductor (shield), plastic jacket.

- \- Better shielding and higher bandwidth than twisted pair; used in cable TV and early Ethernet (RG-59 for cable TV, RG-58 thin Ethernet, RG-11 thick Ethernet).

- \- Disadvantages: bulkier and costlier than twisted pair; signal weakens over distance.

3. Optical fibre: thin glass/plastic core surrounded by cladding (lower refractive index) and a protective jacket. Light travels by total internal reflection.

- \- Types: single-mode (thin core, laser, long distance) and multimode (thicker core, LED, shorter distance; step-index or graded-index).

- \- Advantages: very high bandwidth, low attenuation, immune to electromagnetic interference, secure, light weight.

- \- Disadvantages: costly, fragile, difficult to install/splice, one-way (two fibres needed for two-way).

B. Unguided (wireless) media - signals travel through air/space.

| Type | Frequency | Features | Uses |
| --- | --- | --- | --- |
| Radio waves | 3 kHz - 1 GHz | Omnidirectional; pass through walls | AM/FM radio, cordless phones, |
|   |   |   | paging |
| Microwaves | 1 - 300 GHz | Unidirectional; line-of-sight, needs | Mobile phones, satellite, point-to-point |
|   |   | towers/antennas | links |
| Infrared | 300 GHz - 400 THz Short range; cannot pass through walls |   | TV remotes, short-range device links |

Conclusion: Guided media give reliable, secure links; unguided media give mobility and easy coverage.

## Answer 3: Line coding with numerical (8 marks)

Definition: Line coding is the process of converting digital data (bits) into a digital signal (voltage levels) for transmission over a link.


## Classification and rules used here:

| Scheme | Rule | Key point |
| --- | --- | --- |
| Unipolar NRZ | 1 = +V, 0 = 0 V | One polarity; has DC component; no |
|   |   | synchronization |
| Polar NRZ-L | 1 = +V, 0 = -V (level decides bit) | DC problem; long runs lose sync |
| Polar NRZ-I | Inversion at a 1; no change at 0 (start level assumed -V) | Better than NRZ-L; long 0s still a |
|   |   | problem |
| Polar RZ | 1 = +V then 0 V; 0 = -V then 0 V (returns to zero mid-bit) | Self-synchronizing; needs 3 levels |
|   |   | and more bandwidth |
| Manchester | Mid-bit transition: 1 = low to high, 0 = high to low | Self-synchronizing, no DC; needs |
|   |   | double bandwidth |
| Bipolar AMI | 0 = 0 V; 1s alternate +V and -V (first 1 = +V) | No DC; long 0s are a problem |
| MLT-3 | Three levels 0, +V, 0, -V cycle; move to next level on 1, stay on 0 | Less bandwidth; used in Fast |
|   | (start at 0) | Ethernet |
| 2B1Q | 2 bits per level (4 levels). If previous level +: 00=+1, 01=+3, 10=-1, | 2 bits per signal element; no |
|   | 11=-3. If previous level -: signs reversed (start previous = +) | self-sync |

Note on conventions: books differ (for example, which bit is high in NRZ-L, or which edge means 1 in Manchester). State your convention at the top of your answer (as in the table) and follow it consistently; follow your class notes if they differ.


## Working notes (so you can reproduce it):

- \- NRZ-I (start -V): bit1=1 -> +V; bit2=0 stays +V; bit3=1 -> -V; bit4=1 -> +V; bits5-6=0 stay +V; bit7=1 -> -V; bit8=0 stays -V.

- \- AMI: 1s at bits 1, 3, 4, 7 get +V, -V, +V, -V; 0s are 0 V.

- \- MLT-3: 1s at bits 1, 3, 4, 7 give levels +V, 0, -V, 0; 0s hold the previous level.

- \- 2B1Q: split into pairs 10 | 11 | 00 | 10. Start previous = +. 10 -> -1 (level now negative). 11 with previous negative -> +3 (now positive). 00 with previous positive -> +1. 10 with previous positive -> -1.

- \- Manchester: 1 = low-to-high, 0 = high-to-low, so the pattern is LH HL LH LH HL HL LH HL.

Conclusion: Choose a line code that gives no DC component, good synchronization and low bandwidth for the application.


## Answer 4(a): Go-Back-N ARQ (5 marks)

Definition: Go-Back-N is a sliding-window ARQ (Automatic Repeat reQuest) protocol. The sender may send up to N frames without waiting for acknowledgements. If a frame is lost or damaged, the sender goes back and resends that frame and all frames after it.

## Key points:

- \- Frames carry sequence numbers modulo 2m. The sender window size is at most 2m - 1; the receiver window size is 1.

- \- The sender keeps copies of unacknowledged frames and runs a timer for the oldest one.

- \- The receiver accepts only the next expected frame in order. Out-of-order frames are discarded.

- \- Acknowledgements are cumulative: ACK k means all frames before k have arrived and k is expected next.

- \- On timeout (or NAK) the sender resends the first unacknowledged frame and every frame sent after it.

Advantages: better line utilisation than Stop-and-Wait; receiver is simple (no buffering). Disadvantage: good frames after an error are also resent, so bandwidth is wasted when errors are frequent. Conclusion: Go-Back-N improves efficiency by pipelining but retransmits more than Selective Repeat.


## Answer 4(b): Byte (character) stuffing (3 marks)

Framing splits the bit stream into frames. In character-oriented framing each frame starts and ends with a special FLAG byte. If the data itself contains FLAG (or the escape byte ESC), the receiver would end the frame too early.

Byte stuffing: the sender inserts an ESC byte before every FLAG or ESC byte found in the data. The receiver removes the ESC and keeps the next byte as ordinary data.

| Original data | After byte stuffing (sent) | Receiver after un-stuffing |
| --- | --- | --- |
| A B C | A B C (no change) | A B C |
| A FLAG B | A ESC FLAG B | A FLAG B |
| A ESC B | A ESC ESC B | A ESC B |
| A ESC FLAG B | A ESC ESC ESC FLAG B | A ESC FLAG B |
| FLAG FLAG | ESC FLAG ESC FLAG | FLAG FLAG |

Frame format: FLAG | Header | stuffed data | Trailer | FLAG. Disadvantage: it is tied to 8-bit characters; bit stuffing is used for arbitrary bit patterns.

## Answer 5(a): Checksum (4 marks)

Given: 4 segments of 8 bits: 10011001, 11100010, 00110100, 10010101. Method: add all segments using 1's complement addition (if there is a carry out of the 8th bit, add it back to the right), then complement the sum. That is the checksum.

```
Segment 1 = 10011001
+ Segment 2 = 11100010
raw sum = 101111011 (carry 1 out of the top)
wrap carry (+1) = 01111100
+ Segment 3 = 00110100
sum = 10110000 (no carry)
+ Segment 4 = 10010101
raw sum = 101000101 (carry 1 out of the top)
wrap carry (+1) = 01000110
Sum (1's complement) = 01000110
Checksum = complement = 10111001
```

## Checksum = 10111001. Transmitted: 10011001 11100010 00110100 10010101 10111001.

Verification at receiver: add all 5 segments (including the checksum) the same way, then complement.

```
Segment 1 = 10011001
+ Segment 2 = 11100010
raw sum = 101111011 (carry 1 out of the top)
wrap carry (+1) = 01111100
+ Segment 3 = 00110100
sum = 10110000 (no carry)
+ Segment 4 = 10010101
raw sum = 101000101 (carry 1 out of the top)
wrap carry (+1) = 01000110
+ Segment 5 = 10111001
sum = 11111111 (no carry)
Sum (1's complement) = 11111111
Checksum = complement = 00000000
```

Sum of all 5 segments = 11111111 (all 1s); its complement is 00000000, so the data is accepted as error-free.


## Answer 5(b): CRC (4 marks)

Given: data = 100110101, generator x4 + x + 1 = 10011 (degree 4, so append 4 zeros). Method: modulo-2 (XOR) division; the remainder is the CRC.

```
Dividend (data + 4 zeros) = 1001101010000
Divisor (generator) = 10011
shift | current bits XOR generator (shifted) result
0 | 1001101010000 10011 0000001010000
6 | 0000001010000 10011 0000000011100
8 | 0000000011100 10011 0000000001111
Remainder (last 4 bits) = 1111
```

*CRC = 1111. Transmitted bit string = data + CRC = 100110101 + 1111 = 1001101011111.*

Verification at receiver: divide the received codeword by the same generator.

```
Received codeword = 1001101011111
Divisor = 10011
shift | current bits XOR generator (shifted) result
0 | 1001101011111 10011 0000001011111
6 | 0000001011111 10011 0000000010011
8 | 0000000010011 10011 0000000000000
Remainder = 0000 -> all zeros, so NO error detected.
```

## Answer 6(a): Multiple access protocols and Slotted ALOHA (4 marks)

Definition: When many stations share one channel, a multiple access protocol decides who may transmit and when.

| Class | Idea | Examples |
| --- | --- | --- |
| Random access | Any station transmits when it has data; collisions are | ALOHA (pure, slotted), CSMA, CSMA/CD, |
|   | possible and handled | CSMA/CA |
| Controlled access | Stations take turns by permission | Reservation, polling, token passing |
| Channelization | Channel is divided among stations | FDMA, TDMA, CDMA |

## Slotted ALOHA:

- \- Time is divided into slots equal to one frame time. A station may send only at the start of a slot.

- \- If two stations send in the same slot, a collision occurs; each waits a random number of slots and retries.

- \- Vulnerable time = Tfr (pure ALOHA = 2 Tfr). Throughput S = G e-G; maximum 1/e = 0.368 (36.8%) at G = 1, double the pure ALOHA maximum of 18.4%.

## Answer 6(b): CSMA (4 marks)

CSMA (Carrier Sense Multiple Access) follows 'sense before you send': a station listens to the channel first and transmits only if it is idle. This lowers collisions but cannot remove them, because of propagation delay (two stations may both sense idle before the other's signal arrives).

| Method | If channel is idle | If channel is busy | Result |
| --- | --- | --- | --- |
| 1-persistent | Transmit immediately | Keep sensing continuously; send | Low delay; high collision chance |
|   | (probability 1) | as soon as it becomes idle | if several stations wait |
| Non-persistent | Transmit immediately | Wait a random time, then sense | Fewer collisions; more delay; |
|   |   | again | channel may sit idle |
| p-persistent (extra) | Transmit with probability p; | Wait for next slot | Balance between the two (slotted |
|   | else wait for next slot |   | channels) |

## Answer 7 (DNS option): Domain Name System (8 marks)

Definition: DNS is an application-layer, distributed hierarchical database that translates human-friendly names (www.example.com) into IP addresses, because computers route using IP addresses, not names.


## Key components:

- \- Domain name space: a tree. Root, then top-level domains (.com, .org, .in), then second-level domains and subdomains. A label is at most 63 characters; a full name at most 255.

- \- Name servers: root servers, TLD servers and authoritative servers (hold the actual records for a domain). Large zones are split among many servers.

- \- Resolver: software on the client that asks the local DNS server for the address.

- \- Transport: normally UDP port 53 (TCP for large responses and zone transfers).

## Resolution steps (iterative, as in the figure):

- \- 1. The user types a name; the PC's resolver checks its cache, then asks the local DNS server.

- \- 2. The local server asks a root server, which refers it to the correct TLD server.

- \- 3. The TLD server refers it to the domain's authoritative server.

- \- 4. The authoritative server returns the IP address; the local server caches it (for its TTL) and replies to the user.

- \- Recursive resolution is also possible: the first server does all the work on the client's behalf.

Other services: host aliasing (CNAME), mail server lookup (MX), reverse lookup (IP to name), load distribution. Conclusion: DNS makes the Internet usable by hiding numeric addresses behind names.

## Answer 7 (FTP option): File Transfer Protocol (8 marks)

Definition: FTP is an application-layer protocol for transferring files between hosts using the client-server model over TCP.

## Working:

- \- Control connection (TCP port 21): opened first; stays open for the whole session; carries commands (USER, PASS, LIST, RETR, STOR, CWD, QUIT) and replies (e.g. 220 ready, 230 logged in, 226 transfer complete, 550 file unavailable).

- \- Data connection (port 20 in active mode): opened for each file transfer or directory listing and closed afterwards.


- \- Because control and data use separate connections, FTP is called out-of-band.

- \- Active mode: server opens the data connection to the client. Passive mode: client opens the data connection to a port given by the server (works through firewalls/NAT).

- \- Data types: ASCII, image (binary), EBCDIC. Structures: file, record, page. Transmission modes: stream (default), block, compressed.

Limitation: plain FTP sends user name and password unencrypted; SFTP/FTPS add security. Conclusion: FTP is reliable (TCP) and suited to bulk file transfer.


## STEP 6 - Simple Explanations for Understanding (not for copying into the exam)

## Q1: OSI vs TCP/IP

Analogy - sending a parcel. Application: you decide what to send. Presentation: you pack it in a form the receiver can open (language, lock, compression). Session: you agree when the delivery conversation starts and ends. Transport: you choose tracked or plain delivery and number the boxes. Network: you write the full address and the courier picks a route. Data link: the local van hands the box to the next depot and checks it is not damaged. Physical: the road and the truck itself.

Why two models? OSI is the neat textbook blueprint. TCP/IP is what was actually built and is used. Memorise the table row 'session + presentation are merged into Application' - examiners like it.

## Q2: Transmission media

Think of media as roads. Twisted pair is a small local road (cheap, okay for short distance). Coaxial is a wider road with walls on both sides (more shielding). Optical fibre is a high-speed rail line: light inside glass bounces along the core (total internal reflection), so it is fast and not disturbed by electrical noise. Wireless media are like announcements through the air: radio goes everywhere (even through walls), microwave needs a clear straight line, infrared works only in the same room.

Exam tip: draw the classification chart first; it quickly earns marks and organises your answer.

## Q3: Line coding

A computer has only 0s and 1s, but a cable carries voltage. Line coding is the 'translation table' from bits to voltages.

Why so many schemes? Each fixes a problem of the one before. Unipolar has a DC component.

NRZ-L/NRZ-I have long runs with no changes, so the receiver loses its timing. RZ and Manchester add a change in every bit so the receiver stays synchronized, but cost more bandwidth. AMI and MLT-3 use three levels to avoid DC and save bandwidth. 2B1Q packs two bits into one level so the signal changes less often.

Why the numerical steps work: NRZ-I - look only at 1s (a 1 flips the level). AMI - 1s alternate sign, 0 stays at zero. MLT-3 - a 1 moves one step along 0, +, 0, -. 2B1Q - cut the bits in pairs first, then use the table and watch the sign of the previous level. Always write your convention first.

## Q4: Go-Back-N and byte stuffing

Stop-and-Wait sends one frame and waits - like asking 'got it?' after every sentence. Go-Back-N sends several sentences in a row (window of N), and the receiver only accepts them in order. If sentence 3 is lost, the receiver ignores 4, 5, 6 because it is still waiting for 3. The sender eventually times out and says 'back to sentence 3', resending 3, 4, 5, 6. That is the 'go back'.

Byte stuffing: FLAG means 'frame ends here'. If your data contains the same byte, the receiver would be fooled. So the sender puts an escape mark (ESC) in front of any look-alike, telling the receiver 'the next byte is just data'. ESC itself needs an ESC in front, otherwise it would be misread.

## Q5: Checksum and CRC

Checksum: the sender adds up all the chunks and sends the complement of the total as a 'balancing number'. The receiver adds all chunks including that number; a perfect result is all 1s (complement = 0). The carry is added back because the sum must stay inside 8 bits (1's complement arithmetic).

CRC: treat the data as one huge binary number and divide it by the generator using XOR (no borrowing). The remainder is the CRC. Appending 4 zeros before dividing makes room for the 4-bit remainder, so data+CRC becomes exactly divisible by the generator. The receiver divides again: remainder 0 means no error detected. Practice rule: at every step, if the leading bit is 1 XOR with the generator, if it is 0 just shift.


## Q6: Slotted ALOHA and CSMA

Imagine a classroom with one microphone. Pure ALOHA: anyone speaks whenever they want, so overlaps are common. Slotted ALOHA: the teacher claps every 10 seconds and you may only start speaking on a clap, so overlaps only happen between people who start on the same clap - the risky window is halved (1 frame time instead of 2). CSMA is polite listening first. 1-persistent: you keep staring at the speaker and jump in the instant they stop (but so does everybody else, so you may clash). Non-persistent: if someone is speaking you go away for a random time and check again (fewer clashes, but the room can sit silent).

## Q7: DNS and FTP

DNS is the phone book of the Internet. You know the name; DNS looks up the number. Nobody keeps the whole phone book, so it is split in a tree: root knows who handles .com, the .com server knows who handles example.com, and that server knows the final answer. Your local server remembers recent answers (cache) so it need not ask again.

FTP is like a phone call plus a courier. The control connection is the phone call where you give instructions ('send me file X'). The data connection is the courier that carries the actual file and then leaves.

## STEP 7 - Final exam strategy

## Most important to study first (you only need 3 good answers out of 7):

| Order | Question | Why first |
| --- | --- | --- |
| 1 | Q3 Line coding numerical | Appeared in both papers; scoring is mechanical once rules are |
|   |   | memorised. |
| 2 | Q1 OSI + OSI vs TCP/IP | Only exact repeat; mostly memory + one diagram. |
| 3 | Q2 Transmission media | Both papers; the classification chart secures easy marks. |
| 4 | Q6 CSMA / Slotted ALOHA | Both papers; short and well defined. |
| 5 | Q7 DNS and FTP | Q7 slot used for application layer both times; both are short. |
| 6 | Q5 Checksum + CRC and Q4 Go-Back-N Medium priority; useful backup if you like numericals or diagrams. |   |

## Topics that can be revised quickly

- \- Application layer (DNS, FTP): about 30 minutes each; learn the diagram and 4-5 key points.

- \- Byte stuffing table, TCP vs UDP table, piggybacking, types of signals (Appendix).

- \- Transmission media: unguided table (frequency ranges and uses).

## Numericals and diagrams you must practise yourself

- \- Line coding: write 3 fresh 8-bit strings and draw all 8 schemes from memory, each time stating your convention. Do not just reread my figure.

- \- Checksum: two fresh sets of 4 x 8-bit segments, including one where the final carry appears twice.

- \- CRC: two fresh problems (generator x4 + x + 1 and one 3-bit generator) with receiver verification.

- \- Diagrams to redraw from memory: OSI vs TCP/IP mapping, media classification chart, Go-Back-N timeline, FTP two-connection diagram, DNS hierarchy.


## Last-minute revision checklist

| Done? | Item |
| --- | --- |
| [ ] | 7 OSI layers in order with one function and one unit each (bits, frame, packet, segment) |
| [ ] | 5 differences between OSI and TCP/IP (layers, session/presentation, network service, transport service, usage) |
| [ ] | Media chart; UTP/STP, coaxial layers, fibre core + cladding; radio/microwave/infrared ranges |
| [ ] | Line coding rules for all 8 schemes (with your convention written) |
| [ ] | Checksum steps (1's complement add, wrap carry, complement) and CRC steps (append zeros, XOR divide, |
|   | remainder) |
| [ ] | Go-Back-N: window size 2^m - 1, receiver window 1, cumulative ACK, resend from lost frame |
| [ ] | Slotted ALOHA vulnerable time and max throughput 36.8%; 1-persistent vs non-persistent |
| [ ] | DNS hierarchy and steps; FTP ports 21 and 20, active vs passive |

## Realistic study order by time available

| Time you have | Plan |
| --- | --- |
| 1 day (about 8 hours) 3 h line coding (practise 3 bit strings) | 1.5 h OSI + media | 1 h CSMA/Slotted ALOHA | 1 h DNS + |   |
|   | FTP | 1 h checksum/CRC practice | 0.5 h checklist. Skip Appendix and network layer. |
| 3 days | Day 1: line coding + OSI. Day 2: media, multiple access, DNS/FTP. Day 3: checksum/CRC, |
|   | Go-Back-N, byte stuffing, Appendix, full checklist. |
| 1 week | Do the 3-day plan, then spend the extra days redrawing diagrams from memory, solving fresh |
|   | numericals, and skimming network layer topics (IP addressing, routing, topologies) from the |
|   | mid-term as low-priority insurance. |

Straight talk: the safest plan is to be genuinely strong in 3 questions, not average in 7. Line coding, OSI and media are the most evidence-backed trio. In the exam, read all 7 questions first, pick the 3 you can finish cleanly, and keep about 5 minutes per question for diagrams.


## APPENDIX - Backup notes (medium/low priority, from 2026 end-term and common syllabus)

## A. TCP vs UDP (2026 Q6a style, 4 marks)

| Point | TCP | UDP |
| --- | --- | --- |
| Connection | Connection-oriented (3-way handshake) | Connectionless |
| Reliability | Reliable: acknowledgements, retransmission, | Unreliable: no ACK, no ordering |
|   | ordered delivery |   |
| Flow/congestion | Yes | No |
| control |   |   |
| Header | 20 bytes minimum | 8 bytes |
| Speed | Slower (overhead) | Faster (low overhead) |
| Uses | Web (HTTP), e-mail (SMTP), file transfer (FTP) DNS queries, streaming, VoIP, online games |   |

## B. Process-to-process delivery (2026 Q6b style, 4 marks)

- \- Network layer delivers to a host; the transport layer delivers to the correct process (application) on that host.

- \- Each process is identified by a port number (16-bit). Ranges: well-known 0-1023 (e.g. HTTP 80, FTP 21, DNS 53), registered 1024-49151, dynamic 49152-65535.

- \- A socket address = IP address + port number; a connection is identified by the pair of socket addresses.

- \- Multiplexing at the sender (many processes share one transport service) and demultiplexing at the receiver (deliver to the right port).

- \- Uses the client-server paradigm: client uses a temporary (ephemeral) port; server uses a well-known port.

## C. Types of signals (2026 Q1a style, 5 marks)

- \- Analog signal: continuous, takes any value in a range (e.g. voice, sine wave). Digital signal: discrete levels (e.g. 0 and 1 as two voltages).

- \- Periodic signal: repeats a pattern over time (sine wave); defined by amplitude, frequency/period and phase. Aperiodic (non-periodic): does not repeat (most real data).

- \- Attenuation, distortion and noise are the main impairments; digital signals are easier to regenerate than analog.

## D. Piggybacking (2026 Q4b style, 2 marks)

Piggybacking means sending the acknowledgement inside an outgoing data frame travelling in the opposite direction, instead of sending a separate ACK frame. Significance: saves bandwidth, reduces the number of frames and improves efficiency in full-duplex links. If the receiver has no data to send within a short time, it sends a separate ACK so the sender does not time out.

Final reminder: this whole pack is a prediction from two end-term papers. Use it to prioritise, then confirm the exact syllabus and marking scheme with your own notes or faculty. If you can send the 2026 paper's right edge (marks/duration/Section II) or the syllabus, the ranking can be tightened.

---
title: 'Third School of Quantum Computing'
imgUrl: '/post-images/qiskit.png'
youtubeId: ''
publishedAt: '2024-07-24'
summary: 'Software requirements for Third School of Quantum Computing'
---

<!-- # Qiskit and Anaconda -->

Software requirements for Third School of Quantum Computing

## Install Anaconda or miniconda

Go to anaconda https://www.anaconda.com/download

Type your mail and get the link to download the free version of anaconda.

Go to your inbox and click on the link, now you can click on the download button.

In terminal execute:

```bash
cd ~/Downloads
chmod +x Anaconda3-2024.XXXXX
./Anaconda3-2024.XXXXX
```

Follow the steps to finish installation.

- In my case I choose to not initialize the conda base environment at startup.

- If you choose to initialize conda base at startup, and you want to disable it, execute the follow command:

```bash
conda config --set auto_activate_base false
```

To activate conda execute

```bash
eval "$(/home/julio/anaconda3/bin/conda shell.zsh hook)"
```

Only the first time you activate conda execute:

```bash
conda init
```

## Create a new environment to work

Create a new environment

```bash
conda create --name cwq
```

Activate cwq environment

```bash
conda activate cwq
```

## Install Qiskit and other required packages

Install pip

```bash
conda install pip
```

Install package

```bash
pip install qiskit
pip install matplotlib
pip install qiskit_ibm_runtime
pip install pylatexenc
pip install notebook
```

## IBM Quantum registration

Go to https://quantum.ibm.com/ and make you registration in order to get you API Token.

## Qiskit Runtime Service setup

Launch jupyter notebook

```bash
jupyter notebook
```

Create a new notebook file and run the following python code:

```python
import qiskit

qiskit.__version__

from qiskit_ibm_runtime import QiskitRuntimeService

# Initialize you conection
service = QiskitRuntimeService(channel="ibm_quantum", # ibm_cloud
                                token = "XXXXX") # API token

# Save your account conection
QiskitRuntimeService.save_account(channel="ibm_quantum",
                                    token="XXXXX")

# Load a backend from IBM
backend = service.backend(name = "ibm_brisbane")

backend.num_qubits
```

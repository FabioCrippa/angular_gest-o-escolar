import { Routes } from '@angular/router';
import { LoginEscolaComponent } from './pages/login-escola/login.escola.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EscolaComponent } from './pages/escola/escola.component';
import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastrar-professor.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { CarteirinhaEstudanteComponent } from './pages/carteirinha-estudante/carteirinha-estudante.component';
import { LoginResponsavelComponent } from './pages/login-responsavel/login.responsavel.component';
import { ResponsavelComponent } from './pages/responsavel/responsavel.component';
import { LoginAlunoComponent } from './pages/login-aluno/login-aluno.component';
import { AlunoComponent } from './pages/aluno/aluno.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'loginEscola', component: LoginEscolaComponent},
    {path: 'escola', component: EscolaComponent},
    {path: 'loginResponsavel', component: LoginResponsavelComponent},
    {path: 'responsavel', component: ResponsavelComponent},
    {path: 'loginAluno', component: LoginAlunoComponent},
    {path: 'aluno', component: AlunoComponent},
    {path: 'cadastroProfessor', component: CadastroProfessorComponent},
    {path: 'carteirinhaEstudante', component: CarteirinhaEstudanteComponent},
    {path: 'cadastroAluno', component: CadastroAlunoComponent},
    {path: '**', component: NotFoundComponent},
];

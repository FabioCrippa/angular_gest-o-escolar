import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EscolaComponent } from './pages/escola/escola.component';
import { CadastroProfessorComponent } from './pages/cadastro-professor/cadastrar-professor.component';
import { CadastroAlunoComponent } from './pages/cadastro-aluno/cadastro-aluno.component';
import { CarteirinhaEstudanteComponent } from './pages/carteirinha-estudante/carteirinha-estudante.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'loginEscola', component: LoginComponent},
    {path: 'escola', component: EscolaComponent},
    {path: 'cadastroProfessor', component: CadastroProfessorComponent},
    {path: 'carteirinhaEstudante', component: CarteirinhaEstudanteComponent},
    {path: 'loginResponsavel', component: LoginComponent},
    {path: 'loginAluno', component: LoginComponent},
    {path: 'cadastroAluno', component: CadastroAlunoComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: NotFoundComponent},
];
